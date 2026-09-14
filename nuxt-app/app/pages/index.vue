<script setup lang="ts">
const colourClasses = {
  primary: 'tw:bg-primary',
  secondary: 'tw:bg-secondary',
  success: 'tw:bg-success',
  danger: 'tw:bg-danger',
  warning: 'tw:bg-warning',
  info: 'tw:bg-info',
  light: 'tw:bg-light',
  dark: 'tw:bg-dark'
} as const

const colorPrimaryRangeClasses = [
  'tw:bg-primary-0 tw:text-primary-0-contrast',
  'tw:bg-primary-1 tw:text-primary-1-contrast',
  'tw:bg-primary-2 tw:text-primary-2-contrast',
  'tw:bg-primary-3 tw:text-primary-3-contrast',
  'tw:bg-primary-4 tw:text-primary-4-contrast',
  'tw:bg-primary-5 tw:text-primary-5-contrast',
  'tw:bg-primary-6 tw:text-primary-6-contrast',
  'tw:bg-primary-7 tw:text-primary-7-contrast',
  'tw:bg-primary-8 tw:text-primary-8-contrast',
  'tw:bg-primary-9 tw:text-primary-9-contrast',
  'tw:bg-primary-10 tw:text-primary-10-contrast',
  'tw:bg-primary-11 tw:text-primary-11-contrast'
] as const

const colorSecondaryRangeClasses = [
  'tw:bg-secondary-0 tw:text-secondary-0-contrast',
  'tw:bg-secondary-1 tw:text-secondary-1-contrast',
  'tw:bg-secondary-2 tw:text-secondary-2-contrast',
  'tw:bg-secondary-3 tw:text-secondary-3-contrast',
  'tw:bg-secondary-4 tw:text-secondary-4-contrast',
  'tw:bg-secondary-5 tw:text-secondary-5-contrast',
  'tw:bg-secondary-6 tw:text-secondary-6-contrast',
  'tw:bg-secondary-7 tw:text-secondary-7-contrast',
  'tw:bg-secondary-8 tw:text-secondary-8-contrast',
  'tw:bg-secondary-9 tw:text-secondary-9-contrast',
  'tw:bg-secondary-10 tw:text-secondary-10-contrast',
  'tw:bg-secondary-11 tw:text-secondary-11-contrast'
] as const

const colorTertiaryRangeClasses = [
  'tw:bg-tertiary-0 tw:text-tertiary-0-contrast',
  'tw:bg-tertiary-1 tw:text-tertiary-1-contrast',
  'tw:bg-tertiary-2 tw:text-tertiary-2-contrast',
  'tw:bg-tertiary-3 tw:text-tertiary-3-contrast',
  'tw:bg-tertiary-4 tw:text-tertiary-4-contrast',
  'tw:bg-tertiary-5 tw:text-tertiary-5-contrast',
  'tw:bg-tertiary-6 tw:text-tertiary-6-contrast',
  'tw:bg-tertiary-7 tw:text-tertiary-7-contrast',
  'tw:bg-tertiary-8 tw:text-tertiary-8-contrast',
  'tw:bg-tertiary-9 tw:text-tertiary-9-contrast',
  'tw:bg-tertiary-10 tw:text-tertiary-10-contrast',
  'tw:bg-tertiary-11 tw:text-tertiary-11-contrast'
] as const

const colorGreyRangeClasses = [
  'tw:bg-grey-0 tw:text-grey-0-contrast',
  'tw:bg-grey-1 tw:text-grey-1-contrast',
  'tw:bg-grey-2 tw:text-grey-2-contrast',
  'tw:bg-grey-3 tw:text-grey-3-contrast',
  'tw:bg-grey-4 tw:text-grey-4-contrast',
  'tw:bg-grey-5 tw:text-grey-5-contrast',
  'tw:bg-grey-6 tw:text-grey-6-contrast',
  'tw:bg-grey-7 tw:text-grey-7-contrast',
  'tw:bg-grey-8 tw:text-grey-8-contrast',
  'tw:bg-grey-9 tw:text-grey-9-contrast',
  'tw:bg-grey-10 tw:text-grey-10-contrast',
  'tw:bg-grey-11 tw:text-grey-11-contrast'
] as const


</script>

<template>
  <section class="wrapper tw:bg-primary-0">
    <h2 class="tw:flex tw:text-display-lg">AlpineJS test</h2>
    <div x-data="counter">
      <p x-text="count" class="tw:text-display-lg tw:aspect-square tw:min-size-[1em] tw:bg-primary tw:text-primary-contrast tw:rounded-full tw:grid tw:place-content-center tw:p-xl tw:max-w-fit tw:aspect-square"></p>
      <button x-on:click="count++">Increment</button>
    </div>
  </section>

  <section class="wrapper">
    <div class="tw:max-w-screen-lg tw:[--layout-column-min:10ch]">
      <div class="layout-grid">
            <CardsCircleImageWithInfo :link="'/'" title="New Releases" shadow="lg" :bordered="true" :picture="{
              src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Newreleases.png&amp;width=348&amp;padding=false'
            }" />
            <CardsCircleImageWithInfo :link="'/'" title="Bestsellers" shadow="lg" :bordered="true" :picture="{
              src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Childrenbooks.png&width=348&padding=false'
            }" />
            <CardsCircleImageWithInfo :link="'/'" title="Fiction Books" shadow="lg" :bordered="true" :picture="{
              src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Fictionbooks.png&width=348&padding=false'
            }" />
            <CardsCircleImageWithInfo :link="'/'" title="Non Fiction" shadow="lg" :bordered="true" :picture="{
              src: 'http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&width=348&padding=false'
            }" />                              
      </div>
    </div>
    <div class="container-md tm">
      <div class="row justify-content-md-center">
        <div class=" col-6 col-lg-2">
          <div>
            <div><a href="/books/new-releases"><img alt="New Releases"
                  src="http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Newreleases.png&amp;width=348&amp;padding=false"
                  loading="lazy"></a></div>
            <p class="circle-image__title"><a href="/books/new-releases">New Releases</a></p>
          </div>
        </div>
        <div class=" col-6 col-lg-2">
          <div>
            <div><a href="/Search?sort=Bestselling&amp;fq=01120-0314-4260"><img alt="Bestsellers"
                  src="http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Childrenbooks.png&amp;width=348&amp;padding=false"
                  loading="lazy"></a></div>
            <p class="circle-image__title"><a href="/Search?sort=Bestselling&amp;fq=01120-0314-4260">Bestsellers</a></p>
          </div>
        </div>
        <div class=" col-6 col-lg-2">
          <div>
            <div><a href="/books/fiction"><img alt="Fiction Books"
                  src="http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Fictionbooks.png&amp;width=348&amp;padding=false"
                  loading="lazy"></a></div>
            <p class="circle-image__title"><a href="/books/fiction">Fiction Books</a></p>
          </div>
        </div>
        <div class=" col-6 col-lg-2">
          <div>
            <div><a href="/books/non-fiction"><img alt="Non-Fiction"
                  src="http://books.telegraph.co.uk/imagecache/getimage?url=/Content/Development/Homepagecontent/Nonfictionbooks.png&amp;width=348&amp;padding=false"
                  loading="lazy"></a></div>
            <p class="circle-image__title"><a href="/books/non-fiction">Non-Fiction</a></p>
          </div>
        </div>






      </div>
    </div>
  </section>

  <section>

    <div class="template-container tm--half center">
      <div class="template-row">
        <div class="col-12">
          <div class="title-block__sub">
            <h2 class="text-normal"> Custom Books </h2>
            <span class="title-block__main--link"><a
                href="/Search?sort=Bestselling&amp;ipp=6&amp;fq=01128&amp;sort=PriceAsc&amp;pg=1">See More</a></span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="template-container tm">
   <div class="template-row product-carousel__wrap">
      <div class="col-12">
        <div class="glide product-carousel glide--swipeable hideArrows glide--ltr glide--carousel" data-glide="{&quot;gap&quot;: 24, &quot;type&quot;: &quot;carousel&quot;, &quot;bound&quot;: true, &quot;perView&quot;: 6, &quot;breakpoints&quot;:{&quot;992&quot;:{&quot;perView&quot;:3},&quot;768&quot;:{&quot;perView&quot;:2}}}">
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides" style="transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); width: 3960px; transform: translate3d(-1320px, 0px, 0px);"> 
                <div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472639936.jpg&amp;height=240&amp;padding=false" alt="Anne, Princess Royal - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472639936.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580">Anne, Princess Royal - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Anne, Princess Royal - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472639936" data-ean="9781472639936" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632203.jpg&amp;height=240&amp;padding=false" alt="Arsenal Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472632203.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424">Arsenal Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Arsenal Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472632203" data-ean="9781472632203" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472633729.jpg&amp;height=240&amp;padding=false" alt="The Ashes Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472633729.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185">The Ashes Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="The Ashes Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472633729" data-ean="9781472633729" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472633712.jpg&amp;height=240&amp;padding=false" alt="Aston Villa Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472633712.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184">Aston Villa Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Aston Villa Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472633712" data-ean="9781472633712" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&amp;height=240&amp;padding=false" alt="Chelsea Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425">Chelsea Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Chelsea Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472632210" data-ean="9781472632210" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472639950.jpg&amp;height=240&amp;padding=false" alt="The Cold War - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472639950.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582">The Cold War - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="The Cold War - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472639950" data-ean="9781472639950" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--active" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472639936.jpg&amp;height=240&amp;padding=false" alt="Anne, Princess Royal - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472639936.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580">Anne, Princess Royal - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Anne, Princess Royal - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472639936" data-ean="9781472639936" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580" rel="nofollow">See product</a>
    </div>
  </div>
</div>

<div class="product-item item glide__slide" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632203.jpg&amp;height=240&amp;padding=false" alt="Arsenal Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472632203.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424">Arsenal Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Arsenal Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472632203" data-ean="9781472632203" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424" rel="nofollow">See product</a>
    </div>
  </div>
</div>

<div class="product-item item glide__slide" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472633729.jpg&amp;height=240&amp;padding=false" alt="The Ashes Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472633729.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185">The Ashes Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="The Ashes Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472633729" data-ean="9781472633729" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185" rel="nofollow">See product</a>
    </div>
  </div>
</div>

<div class="product-item item glide__slide" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472633712.jpg&amp;height=240&amp;padding=false" alt="Aston Villa Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472633712.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184">Aston Villa Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Aston Villa Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472633712" data-ean="9781472633712" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184" rel="nofollow">See product</a>
    </div>
  </div>
</div>

<div class="product-item item glide__slide" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&amp;height=240&amp;padding=false" alt="Chelsea Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425">Chelsea Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Chelsea Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472632210" data-ean="9781472632210" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425" rel="nofollow">See product</a>
    </div>
  </div>
</div>

<div class="product-item item glide__slide" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472639950.jpg&amp;height=240&amp;padding=false" alt="The Cold War - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472639950.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582">The Cold War - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="The Cold War - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472639950" data-ean="9781472639950" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582" rel="nofollow">See product</a>
    </div>
  </div>
</div>


                
            <div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472639936.jpg&amp;height=240&amp;padding=false" alt="Anne, Princess Royal - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472639936.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580">Anne, Princess Royal - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Anne, Princess Royal - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472639936" data-ean="9781472639936" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Anne-Princess-Royal---The-Telegraph-Custom-Gift-Book/31552580" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632203.jpg&amp;height=240&amp;padding=false" alt="Arsenal Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472632203.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424">Arsenal Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Arsenal Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472632203" data-ean="9781472632203" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Arsenal-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331424" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472633729.jpg&amp;height=240&amp;padding=false" alt="The Ashes Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472633729.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185">The Ashes Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="The Ashes Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472633729" data-ean="9781472633729" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/The-Ashes-Headlines---The-Telegraph-Custom-Gift-Book/28650185" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472633712.jpg&amp;height=240&amp;padding=false" alt="Aston Villa Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472633712.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184">Aston Villa Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Aston Villa Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472633712" data-ean="9781472633712" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Aston-Villa-Football-Headlines---The-Telegraph-Custom-Gift-Book/28650184" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px; margin-right: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&amp;height=240&amp;padding=false" alt="Chelsea Football Headlines - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472632210.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425">Chelsea Football Headlines - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="Chelsea Football Headlines - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472632210" data-ean="9781472632210" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/Chelsea-Football-Headlines---The-Telegraph-Custom-Gift-Book/27331425" rel="nofollow">See product</a>
    </div>
  </div>
</div><div class="product-item item glide__slide glide__slide--clone" style="width: 196px; margin-left: 12px;">
  <div class="product-list__content"> <div class="product-item--img product-list__content--img product-list__content--img-240"><span><a href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582"><img src="http://books.telegraph.co.uk/imagecache/getimage?url=//tmg.dmmserver.com/media/640/97814726/9781472639950.jpg&amp;height=240&amp;padding=false" alt="The Cold War - The Telegraph Custom Gift Book" loading="lazy" onerror="this.onerror=null; this.src='http://books.telegraph.co.uk/imagecache/getimage?url=https://tmg.dmmserver.com/media/640/97814726/9781472639950.jpg&amp;height=240&amp;padding=false'"></a></span></div>
    
    <p class="product-list__content--title"><a href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582">The Cold War - The Telegraph Custom Gift Book</a></p>
    
    
    <span class="pb-template__content--format">Customisable Book</span>
    <p class="product-list__content--price"><span class="product-list__content--current">£70.00</span> </p>
    <div class="product-list__content--buy-button" data-title="The Cold War - The Telegraph Custom Gift Book" data-author="" data-group="Book" data-tags="" data-barcode="9781472639950" data-ean="9781472639950" data-type="Customisable Book" data-price="£70.00" data-rrp="" data-percent="0" data-save="£0.00">
   
   <a class="button btn" href="/Product/The-Cold-War---The-Telegraph-Custom-Gift-Book/31552582" rel="nofollow">See product</a>
    </div>
  </div>
</div></div> 
          </div>
        <div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;"></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"></button></div></div>
      </div>
   </div>
</div> -->
  </section>

  <section class="wrapper flow">

    <h1>Buttons</h1>

    <AlpineFor class="tw:flex tw:gap-sm"
      :data="{ buttons: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] }"
      items="buttons" item="button" item-key="button">
      <template #item>
        <button v-pre type="button" :class="'btn btn-' + button"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"></button>
      </template>
    </AlpineFor>



  <h3>Inverted Buttons</h3>
    <AlpineFor class="tw:flex tw:gap-sm tw:bg-primary tw:p-md"
      :data="{ buttons: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] }"
      items="buttons" item="button" item-key="button">
      <template #item>
        <button v-pre type="button" :class="'btn btn-' + button + ' ' + 'btn-inverted'"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"></button>
      </template>
    </AlpineFor>

  <h3>Outline Buttons</h3>
    <AlpineFor class="tw:flex tw:gap-sm tw:p-md"
      :data="{ buttons: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] }"
      items="buttons" item="button" item-key="button">
      <template #item>
        <button v-pre type="button" :class="'btn btn-' + button + ' ' + 'btn-outline'"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"></button>
      </template>
    </AlpineFor>

    <div>
      <Button type="solid" modifier="wide">Primary</Button>
    </div>

    <div>
      <Button type="solid" modifier="square"><Icon name="bx:package" /></Button>
    </div>

    <div>
      <Button type="solid" modifier="circle"><Icon name="bx:package" /></Button>
    </div>    

    <div>
      <button type="button" class="btn btn-link">Link</button>
    </div>


    <div>
      <a class="btn btn-primary" href="#" role="button">Link</a>
      <button class="btn btn-primary" type="submit">Button</button>
      <input class="btn btn-primary" type="button" value="Input">
      <input class="btn btn-primary" type="submit" value="Submit">
      <input class="btn btn-primary" type="reset" value="Reset">
    </div>

    <div>
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-light">Light</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>

    <div>
      <button type="button" class="btn btn-primary btn-lg">Large button</button>
      <button type="button" class="btn btn-secondary btn-lg">Large button</button>
    </div>

    <div>
      <button type="button" class="btn btn-primary btn-sm">Small button</button>
      <button type="button" class="btn btn-secondary btn-sm">Small button</button>
    </div>

    <div>
      <button type="button" class="btn btn-primary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
        Custom button
      </button>
    </div>
  </section>

  <section class="wrapper">
    <div class="tw:flex tw:gap-sm tw:flex-col">
      <div class="tw:flex tw:gap-sm">
        <div v-for="colour in Object.keys(colourClasses)" :key="colour"
          :class="[colourClasses[colour as keyof typeof colourClasses], 'tw:size-2xl tw:rounded-full']" />
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div v-for="entry in colorPrimaryRangeClasses" :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square" :class="entry">
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div v-for="entry in colorSecondaryRangeClasses" :key="entry"
          class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square" :class="entry">
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div v-for="entry in colorTertiaryRangeClasses" :key="entry" class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square" :class="entry">
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>
      <div class="tw:flex tw:gap-sm layout-grid tw:flex-wrap tw:*:flex-auto">
        <div v-for="entry in colorGreyRangeClasses" :key="entry" class="tw:rounded-full tw:grid tw:place-items-center tw:p-md tw:aspect-square" :class="entry">
          <!-- {{ entry.replace(/^tw:bg-([^ ]+)(?: tw:text-[^ ]+)?$/, '$1') }} -->
        </div>
      </div>      
    </div>
  </section>
  <section class="wrapper">
  <div class="*:block">
    <p class="h1 fluid unit-em tw:unit-em">h1. Bootstrap heading</p>
    <p class="h2 fluid unit-px">h2. Bootstrap heading</p>
    <p class="h3">h3. Bootstrap heading</p>
    <p class="h4">h4. Bootstrap heading</p>
    <p class="h5">h5. Bootstrap heading</p>
    <p class="h6">h6. Bootstrap heading</p>

    <p class="display-1">h1. Bootstrap heading</p>
    <p class="display-2">h2. Bootstrap heading</p>
    <p class="display-3">h3. Bootstrap heading</p>
    <p class="display-4">h4. Bootstrap heading</p>
    <p class="display-5">h5. Bootstrap heading</p>
    <p class="display-6">h6. Bootstrap heading</p>
  </div>
  </section>

  <section>
    <div class="test-primary tw:size-4xl"></div>

  </section>

  <div class="flow tw:pt-4xl tw:bg-mix-primary">
    <section class="flow wrapper">
      <h3 class="heading-2xl">SingleImage Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 6" :key="i">
          <CardsSingleImage :link="'/'" title="Test Title" shadow="lg" :bordered="true" />
        </template>
      </div>
    </section>
    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfo Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 6" :key="i">
          <CardsImageWithInfo link="/" title="Test Title" author="Justin" :ctas="{
            label: 'Click me',
            href: '/',
            classes: {
              base: 'btn'
            }
          }">
            <template #author="{ author }">
              Author Slot Content {{ author }}
            </template>
            <template #format="{ format }">
              Format Slot Content {{ format }}
            </template>
          </CardsImageWithInfo>
        </template>
      </div>
    </section>

    <section class="flow wrapper">
      <h3 class="heading-2xl">SingleCircleImage Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 6" :key="i">
          <CardsSingleCircleImage :link="'/'" title="Test Title" shadow="lg" :bordered="true" />
        </template>
      </div>
    </section>

    <section class="flow wrapper">
      <h3 class="heading-2xl">CircleImageWithInfo Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 6" :key="i">
          <CardsCircleImageWithInfo :link="'/'" title="Test Title" subtitle="Test Subtitle" shadow="lg" :bordered="true" />
        </template>
      </div>
    </section>    


    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfoFixedColumnLayout Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 3" :key="i">
          <CardsImageWithInfoFixedColumnLayout :link="'/'" title="Test Title" subtitle="Test Subtitle" shadow="lg" :bordered="true" />
        </template>
      </div>
    </section>  
    
    <section class="flow wrapper">
      <h3 class="heading-2xl">ImageWithInfoFixedRow Layout Component</h3>
      <div class="layout-grid layout-grid--column-count tw:[--layout-column-min:15ch] tw:[--column-count:6]">
        <template v-for="i in 3" :key="i">
          <CardsImageWithInfoFixedRowLayout :link="'/'" title="Test Title" subtitle="Test Subtitle" shadow="lg" :bordered="true" />
        </template>
      </div>
    </section>      

    <Glide data-glide='{"perView":3}'>
      <template v-for="i in 6" :key="i">
        <GlideSlide>
          <CardsImageWithInfo title="Test Title" />
        </GlideSlide>
      </template>
    </Glide>

    <Button :label="'Click me'" color="secondary" :href="'/'" />
  </div>

</template>