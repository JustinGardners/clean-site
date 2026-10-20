<script setup lang="ts">
type Triggers = {el: Element, index: number};
const mmItems = ref(null) as Ref<Triggers[] | null>;

const removeOpenClass = (element: Element) => {
    element.parentElement?.classList.remove('open');
};

const primaryNavItemClick = (event: Event, index: number) => {
    const notClickedItems = Object.values(mmItems.value ?? []).filter(item => item.index !== index);
    notClickedItems.forEach(({el}) => removeOpenClass(el));
    // Tie media query value to a variable
    const isMobile = window.matchMedia("(width <= 600px)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile && event.target) {
        // Handle mobile-specific behavior
        event.preventDefault();

        const target = event.target;
        if (target instanceof Element) {
            target.parentElement?.classList.toggle('open');
            if (isTouch && target.parentElement?.classList.contains('open')) {
                document.body.classList.add('mobileMenuOpen');
            }
        }
    }
};

onMounted(() => {
    const triggers = Array.from(document.querySelectorAll('.mm__trigger')).reduce((acc, el, index) => {
        acc.push({el, index});
        return acc;
    }, [] as Triggers[]);
    mmItems.value = triggers;
    // mmItems.value.forEach(mm => mm.el.addEventListener('click', primaryNavItemClick));
    Object.values(triggers).forEach(({el, index}) => el.addEventListener('click', (event) => primaryNavItemClick(event, index)));
})

</script>

<template>
    <div id="nav" class="">
        <div id="navWrap">
            <div id="navMain">
                <div class="menuText">
                    <span>Navigation</span><span id="navClickerX">X</span>
                </div>

                <ul class="primary">
                    <li>
                        <a href="/books" class="mm__trigger">Books</a>
                        <PageMegaMenuBooks />
                    </li>
                    <li>
                        <a href="/ebooks" class="mm__trigger">eBooks</a>
                        <PageMegaMenuEBooks />
                    </li>
                    <li>
                        <a href="/blu-ray" class="mm__trigger">Blu-ray</a>
                        <PageMegaMenuBluRay />
                    </li>
                    <li>
                        <a href="/cd-vinyl" class="mm__trigger">CD & Vinyl</a>
                        <PageMegaMenuCdVinyl />
                    </li>
                    <li>
                        <a href="/gifts" class="mm__trigger">Gifts</a>
                        <PageMegaMenuGifts />
                    </li>
                    <li>
                        <a href="/offers" class="mm__trigger">Offers</a>
                        <PageMegaMenuOffers />
                    </li>
                </ul>

                <ul id="mobileExtras">
                    <li data-role="list-divider" role="heading" data-theme="a" class="ui-li-divider ui-bar-a">
                        Options
                    </li>
                    <li id="navMenuAccount">
                        <a href="/Account" data-role="none" class="ui-btn ui-btn-icon-right ui-icon-carat-r">My
                            account</a>
                    </li>
                    <li id="navMenuLogoff">
                        <a href="/Account/Logoff" data-role="none" data-ajax="false"
                            class="ui-btn ui-btn-icon-right ui-icon-carat-r">Log off</a>
                    </li>
                    <li id="navMenuHelp">
                        <a href="/Help" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Help</a>
                    </li>
                    <li class="ui-btn">
                        <a href="https://www.telegraph.co.uk/" target="_blank">Visit The Telegraph</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>