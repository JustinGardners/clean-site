<template>
  <div id="outerWrap">
    <div id="wrap">
      <PageHeader />
      <main id="main-section">
        <div class="product-page">
          <div id="body">
            <!-- <div class="product book">
              <div class="productInfo">
                <div class="productInfoWrap"> -->
                  <slot />
                <!-- </div>
              </div>
            </div> -->
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  </div>

</template>
