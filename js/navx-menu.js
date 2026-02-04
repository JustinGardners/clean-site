// NAVX MEGA MENU V0.4
(function () {
  const SELECTORS = {
    trigger: ".mm__trigger",
    mega: ".megaMenu",
    l1: ".mm__l1",
    l2: ".mm__l2",
    label: ".group-label",
    viewAll: "a.mm__viewall",
    item: "a.mm__item",
    legacyCategory: "li.category",
    legacyGroupLinks: ".dropdown-group a",
  };

  const VIEW_ALL_RE = /^\s*view\s*all\s*$/i;

  function text(el) {
    return (el?.textContent || "").trim();
  }

  function href(el) {
    return el?.getAttribute?.("href") || "#";
  }

  function isViewAllAnchor(a) {
    if (!a) return false;
    if (a.matches?.(SELECTORS.viewAll)) return true;
    return VIEW_ALL_RE.test(text(a));
  }

  // Parse a group LI into {label, viewAll, items}
  function parseGroup(li) {
    const label = text(li.querySelector(SELECTORS.label));

    const anchors = Array.from(
      li.querySelectorAll(
        `${SELECTORS.item}, ${SELECTORS.viewAll}, ${SELECTORS.legacyGroupLinks}`,
      ),
    ).filter((a) => a && a.tagName === "A");

    const explicitViewAll = li.querySelector(SELECTORS.viewAll);
    const viewAllAnchor =
      explicitViewAll || anchors.find(isViewAllAnchor) || null;

    // Items = everything except viewAll
    const items = anchors
      .filter((a) => a !== viewAllAnchor)
      .map((a) => ({ label: text(a), href: href(a) }))
      .filter((i) => i.label);

    // If viewAll is empty label or missing, normalize
    const viewAll =
      viewAllAnchor && text(viewAllAnchor)
        ? { label: text(viewAllAnchor), href: href(viewAllAnchor) }
        : null;

    return { label, viewAll, items };
  }

  /**
   * TREE mode parser:
   *   - L1 groups are .mm__l1 (or any .category with a label if no mm__l1 exist)
   *   - L2 groups are .mm__l2 that follow the current L1
   */
  function parseTreeMenu(megaEl) {
    const nodes = Array.from(
      megaEl.querySelectorAll(`${SELECTORS.l1}, ${SELECTORS.l2}`),
    );

    const groups = [];
    let currentL1 = null;

    for (const node of nodes) {
      if (node.matches(SELECTORS.l1)) {
        const g = { ...parseGroup(node), l2: [], _sourceEl: node };
        currentL1 = g;
        groups.push(g);
      } else if (node.matches(SELECTORS.l2) && currentL1) {
        currentL1.l2.push({ ...parseGroup(node), _sourceEl: node });
      }
    }

    const promoIndex = groups.findIndex(
      (g) => g.label.toLowerCase() === "promotions",
    );
    if (promoIndex >= 0) {
      const promos = groups[promoIndex];

      promos.l2 = promos.items.map((item) => ({
        label: item.label,
        viewAll: { href: item.href, label: item.label },
        items: [],
        promo: true,
      }));

      promos.items = [];
      promos.promo = true;
    }

    return { mode: "tree", groups };
  }

  /**
   * LEGACY mode parser:
   * For mega menus that do NOT contain .mm__l1/.mm__l2.
   * Flatten everything into a single column grouped by each .category heading.
   */
  function parseLegacyMenu(megaEl) {
    const cats = Array.from(megaEl.querySelectorAll(SELECTORS.legacyCategory));

    const legacyGroups = cats
      .map((li) => {
        const g = parseGroup(li);
        if (!g.label && (!g.items || !g.items.length) && !g.viewAll)
          return null;

        return g;
      })
      .filter(Boolean);

    return { mode: "legacy", legacyGroups };
  }

  function parseMenu(megaEl) {
    const hasTreeMarkers =
      megaEl.querySelector(SELECTORS.l1) || megaEl.querySelector(SELECTORS.l2);
    return hasTreeMarkers ? parseTreeMenu(megaEl) : parseLegacyMenu(megaEl);
  }

  function extractLegacyMedia(megaEl) {
    const legacyMedia = megaEl.querySelector("a.mm__mediaImage");
    if (!legacyMedia) return null;
    return legacyMedia.parentNode.removeChild(legacyMedia);
  }

  window.mmNavComponent = function () {
    return {
      data: { mode: "tree", groups: [] },
      activeL1: 0,
      activeL2: 0,

      triggerLabel: "Shop",
      triggerHref: "#",
      megaEl: null,

      init() {
        const raw = this.$el?.dataset?.mmData || "{}";
        try {
          this.data = JSON.parse(raw) || { mode: "tree", groups: [] };
        } catch (_) {
          this.data = { mode: "tree", groups: [] };
        }

        this.triggerLabel = this.$el?.dataset?.mmTriggerLabel || "Shop";
        this.triggerHref = this.$el?.dataset?.mmTriggerHref || "#";

        this.megaEl = this.$el.closest(".megaMenu");

        if (this.data.mode === "tree") {
          const firstWithL2 = (this.data.groups || []).findIndex(
            (g) => g.l2 && g.l2.length,
          );
          this.activeL1 = firstWithL2 >= 0 ? firstWithL2 : 0;
          this.activeL2 = 0;
        }
      },

      close() {
        if (!this.megaEl) return;
        this.megaEl.classList.remove("is-open");
        this.megaEl.style.display = "none";
      },

      // ===== TREE helpers =====
      setL1(idx) {
        this.activeL1 = idx;
        this.activeL2 = 0;
      },
      setL2(idx) {
        this.activeL2 = idx;
      },

      activeL1Group() {
        return (this.data.groups || [])[this.activeL1] || null;
      },

      // Fallbacks:
      //  - If L1 has real L2 groups → use them
      //  - If L1 has items but no L2 → create a pseudo L2 that contains those items
      l2List() {
        const l1 = this.activeL1Group();
        if (!l1) return [];
        if (l1.l2 && l1.l2.length) return l1.l2;
        if (l1.items && l1.items.length) {
          return [
            {
              label: l1.label,
              viewAll: l1.viewAll,
              items: l1.items,
              pseudo: true,
            },
          ];
        }
        return [];
      },

      showCol2() {
        const l1 = this.activeL1Group();
        return !!(l1 && l1.l2 && l1.l2.length);
      },

      activeL2Group() {
        return this.l2List()[this.activeL2] || null;
      },

      itemsList() {
        return this.activeL2Group()?.items || [];
      },

      // ===== HEAD links =====
      col1Label() {
        return `Show All ${this.triggerLabel}`;
      },
      col1Href() {
        return this.triggerHref || "#";
      },
      col2Label() {
        const l1 = this.activeL1Group();
        return l1 ? `View More ${l1.label}` : "";
      },
      col2Href() {
        const l1 = this.activeL1Group();
        return l1?.viewAll?.href || "#";
      },
      col3Label() {
        const l2 = this.activeL2Group();
        return l2 ? `View More ${l2.label}` : "";
      },
      col3Href() {
        const l2 = this.activeL2Group();
        return l2?.viewAll?.href || "#";
      },
    };
  };

  function buildLegacyMarkup(data) {
    const groups = data.legacyGroups || [];
    if (!groups.length) {
      return `<div class="mm__empty">No links available.</div>`;
    }

    return groups
      .map((g) => {
        const title = g.label
          ? `<div class="mm__legacyTitle">${g.label}</div>`
          : "";

        const viewAll = g.viewAll
          ? `<div class="mm__legacyViewAll"><a class="mm__link mm__link--viewAll" href="${g.viewAll.href}">${g.viewAll.label}</a></div>`
          : "";

        const items = (g.items || [])
          .map(
            (i) =>
              `<li><a class="mm__link" href="${i.href}">${i.label}</a></li>`,
          )
          .join("");

        return `
          <section class="mm__legacyGroup">
            ${title}
            ${viewAll}
            <ul class="mm__items mm__items--legacy">${items}</ul>
          </section>
        `;
      })
      .join("");
  }

  function buildUI(megaEl, data) {
    const legacy = megaEl.querySelector(".categoryContainer");
    if (legacy) legacy.style.setProperty("display", "none", "important");

    const legacyMedia = extractLegacyMedia(megaEl);
    const hasMedia = !!legacyMedia;

    const root = document.createElement("div");
    root.className = "mm";
    if (data.mode === "legacy") root.classList.add("mm--legacy");

    root.setAttribute("x-data", "mmNavComponent()");
    root.dataset.mmData = JSON.stringify(data);
    root.dataset.mmTriggerLabel = megaEl.__mmTriggerLabel || "Shop";
    root.dataset.mmTriggerHref = megaEl.__mmTriggerHref || "#";

    if (data.mode === "legacy") {
      root.innerHTML = `
        <div class="mm__col mm__col--l1">
          <div class="mm__head">
            <a class="mm__headLink" :href="col1Href()" x-text="col1Label()"></a>
          </div>
          <div class="mm__legacyWrap">
            ${buildLegacyMarkup(data)}
          </div>
        </div>
        ${
          hasMedia
            ? `
        <div class="mm__col mm__col--media">
          <div class="mm__mediaCard">
            <button type="button" class="mm__close" @click="close()">X</button>
            <div class="mm__mediaBody">
              <div class="mm__mediaSlot"></div>
            </div>
          </div>
        </div>
        `
            : `
        <div class="mm__col mm__col--media">
          <div class="mm__mediaCard">
            <button type="button" class="mm__close" @click="close()">X</button>
          </div>
        </div>
        `
        }
      `;

      megaEl.prepend(root);

      if (legacyMedia) {
        root.querySelector(".mm__mediaSlot")?.appendChild(legacyMedia);
      }

      if (window.Alpine?.initTree) {
        window.Alpine.initTree(root);
      } else {
        document.addEventListener(
          "alpine:init",
          () => window.Alpine?.initTree?.(root),
          { once: true },
        );
      }

      return;
    }

    // TREE markup with: showCol2() + pseudo L2 fallback
    /*
    Click/Hover toggle
    @mouseenter="setL2(idx)" @click="setL2(idx)"
    */
    root.innerHTML = `
      <div class="mm__col mm__col--l1">
        <div class="mm__head">
          <a class="mm__headLink" :href="col1Href()" x-text="col1Label()"></a>
        </div>
        <ul class="mm__list mm__list--l1">
          ${(data.groups || [])
            .map(
              (g, idx) => `
              <li>
                <button type="button" class="mm__btn ${g.promo ? "mm__l1--promo" : ""}"
                  :class="{ 'is-active' : activeL1 === ${idx} }" @click="setL1(${idx})">
                  <span>${g.label}</span>
                  <span class="mm__chev">&#8250;</span>
                </button>
              </li>
            `,
            )
            .join("")}
        </ul>
      </div>

      <div class="mm__col mm__col--l2" x-show="showCol2()" x-cloak>
        <div class="mm__back" @click="goBack()" x-show="mobileLevel > 1">‹ Back</div>
        <div class="mm__head">
          <template x-if="activeL1Group()">
            <a class="mm__headLink" :href="col2Href()" x-text="col2Label()"></a>
          </template>
        </div>

        <template x-if="l2List().length">
          <ul class="mm__list mm__list--l2">
            <template x-for="(g, idx) in l2List()" :key="idx">
              <li>
                <button type="button" class="mm__btn"
                  :class="{ 'is-active': activeL2 === idx, 'mm__l2--promo': g.promo }" @click="setL2(idx)">
                  <span x-text="g.label"></span>
                  <span class="mm__chev" x-show="g.items.length">&#8250;</span>
                </button>
              </li>
            </template>
          </ul>
        </template>
      </div>

      <div class="mm__col mm__col--l3">
        <div class="mm__back" @click="goBack()" x-show="mobileLevel > 1">‹ Back</div>
        <div class="mm__head">
          <template x-if="activeL2Group() && itemsList().length">
            <a class="mm__headLink" :href="col3Href()" x-text="col3Label()"></a>
          </template>
        </div>

        <template x-if="activeL2Group() && itemsList().length">
          <div class="mm__panel">
            <ul class="mm__items">
              <template x-for="(i, idx) in itemsList()" :key="idx">
                <li>
                  <a class="mm__link" :href="i.href" x-text="i.label"></a>
                </li>
              </template>
            </ul>
          </div>
        </template>

        <template x-if="activeL2Group() && !itemsList().length">
          <div class="mm__empty">Select an item to see links.</div>
        </template>
      </div>

      <div class="mm__col mm__col--media">
        <div class="mm__mediaCard">
          <button type="button" class="mm__close" @click="close()">X</button>
          <div class="mm__mediaBody">
            ${hasMedia ? `<div class="mm__mediaSlot"></div>` : ``}
          </div>
        </div>
      </div>
    `;

    megaEl.prepend(root);

    if (legacyMedia) {
      root.querySelector(".mm__mediaSlot")?.appendChild(legacyMedia);
    }

    if (window.Alpine?.initTree) {
      window.Alpine.initTree(root);
    } else {
      document.addEventListener(
        "alpine:init",
        () => window.Alpine?.initTree?.(root),
        { once: true },
      );
    }
  }

  function initMegaMenus() {
    document.querySelectorAll(SELECTORS.mega).forEach((megaEl) => {
      if (megaEl.__mmInit) return;
      megaEl.__mmInit = true;

      const li = megaEl.closest("li");
      const trigger = li ? li.querySelector(SELECTORS.trigger) : null;

      megaEl.__mmTriggerLabel = trigger ? trigger.textContent.trim() : "Shop";
      megaEl.__mmTriggerHref = trigger
        ? trigger.getAttribute("href") || "#"
        : "#";

      const data = parseMenu(megaEl);
      buildUI(megaEl, data);
    });
  }

  // Run
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMegaMenus);
  } else {
    initMegaMenus();
  }

  // Mobile Nav Toggle
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("#navButton .navbarToggle");
    const navMain = document.querySelector("#navMain");

    if (!btn || !navMain) return;

    btn.addEventListener("click", function () {
      navMain.classList.toggle("is-open");
      document.body.classList.toggle("mobileMenuOpen");
    });
  });

  // Toggle open/close
  document.addEventListener("click", (e) => {
    const topLink = e.target.closest("ul.primary > li > a");
    const openMegas = Array.from(
      document.querySelectorAll(".megaMenu.is-open"),
    );

    if (topLink && !e.target.closest(".megaMenu")) {
      const li = topLink.closest("li");
      const mega = li?.querySelector(":scope > .megaMenu");

      if (!mega) return;

      e.preventDefault();

      openMegas.forEach((m) => {
        if (m !== mega) {
          m.classList.remove("is-open");
          m.style.display = "none";
        }
      });

      mega.classList.toggle("is-open");
      mega.style.display = mega.classList.contains("is-open") ? "" : "none";
      return;
    }

    // click outside closes all open megas
    if (openMegas.length && !e.target.closest(".megaMenu")) {
      openMegas.forEach((m) => {
        m.classList.remove("is-open");
        m.style.display = "none";
      });
    }
  });

  document.addEventListener("alpine:init", () => {
    Alpine.data("mmNavComponent", function () {
      return {
        ...window.mmNavComponent(),

        mobileLevel: 1,

        init() {
          this.$nextTick(() => {
            this.updateMobileState();
          });
        },

        setL1(idx) {
          this.activeL1 = idx;
          this.activeL2 = 0;
          this.mobileLevel = window.innerWidth < 768 ? 2 : this.mobileLevel;
          this.updateMobileState();
        },

        setL2(idx) {
          this.activeL2 = idx;
          this.mobileLevel = window.innerWidth < 768 ? 3 : this.mobileLevel;
          this.updateMobileState();
        },

        goBack() {
          if (this.mobileLevel > 1) this.mobileLevel--;
          this.updateMobileState();
        },

        updateMobileState() {
          const root = this.$el;
          root.classList.toggle("mm--show-l1", this.mobileLevel === 1);
          root.classList.toggle("mm--show-l2", this.mobileLevel === 2);
          root.classList.toggle("mm--show-l3", this.mobileLevel === 3);
        },
      };
    });
  });
})();
