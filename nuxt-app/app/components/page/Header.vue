<script setup lang="ts">
</script>

<template>

  <header id="headerWrap">
    <div id="header">
      <div class="container-md">
        <div class="row">
          <div id="storeLogo" class="header__logoWrap">
            <a class="header__logo" href="/" title="Storefront">
              <h1>Storefront</h1>
            </a>
          </div>
          <PageNavigationMiniBasket />
          <PageNavigationExtraButtons />
          <PageNavigationSearch />
        </div>
      </div>
    </div>
    <PageNavigation />
  </header>
</template>
