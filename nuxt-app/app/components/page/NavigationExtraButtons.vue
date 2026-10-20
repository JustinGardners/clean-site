<script setup lang="ts">

const mobileMenuOpen = ref(false);

useHead({
  bodyAttrs: {
    class: computed(() => mobileMenuOpen.value ? 'mobileMenuOpen' : '')
  }
});

const accountNavOpen = ref(false);

</script>

<template>
          <div id="navSupport">
            <div id="miniNav">
              <div class="smallText">Click here to login</div>
              <a
                class="dropdownToggle"
                href="#"
                @click.prevent="accountNavOpen = !accountNavOpen"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                :aria-expanded="accountNavOpen"
                rel="nofollow"
              >
                <span class="navMyAccount"><span>My </span>Account</span>
              </a>

              <ul
                class="dropdown-menu accountNav"
                aria-labelledby="dropdownMenuLink"
              >
                <li id="navMenuAccount" class="dropdown-item">
                  <a href="/account" rel="nofollow"
                    >My account</a
                  >
                </li>
                <li id="navMenuLogoff" class="dropdown-item">
                  <a href="https://books.telegraph.co.uk/Account/Logon"
                    >Sign In or Register</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div id="wishlistLink"><a href="/Account/Wishlist">Wishlist</a></div>
          <div class="navExtraButtons">
            <ul>
              <li>
                <a href="https://www.telegraph.co.uk/">Visit the Telegraph</a>
              </li>
            </ul>
          </div>
          <div id="navButton" class="navbar-light">
            <a
              class="navbarToggle"
              aria-controls="navMain"
              aria-label="Toggle navigation"
              @click="mobileMenuOpen = !mobileMenuOpen"
              ><span class="togglerText">Menu</span></a
            >
          </div>    
</template>