<template>
  <div class="tw:container tw:mx-auto">
    <h1>Utilities</h1>
    <p>Bootstrap utilities are disabled by default. The variable $site-bs-utilities sets this configuration. See the documentation for more details. https://getbootstrap.com/docs/5.3/utilities/api/#using-the-api</p>
  </div>

  <section class="tw:container tw:mx-auto tw:my-8 flow">
    <h2>Bootstrap Grid Example</h2>
    <div class="text-center">
      <div class="row tw:bg-primary/20">
        <div class="col tw:border-primary tw:border tw:p-3">
          Column
        </div>
        <div class="col tw:border-primary tw:border tw:p-3">
          Column
        </div>
        <div class="col tw:border-primary tw:border tw:p-3">
          Column
        </div>
      </div>
    </div>

    <div class="tw:container text-center">
      <div class="row tw:bg-primary/20">
        <div class="col tw:border-primary tw:border tw:p-3">
          1 of 2
        </div>
        <div class="col tw:border-primary tw:border tw:p-3">
          2 of 2
        </div>
      </div>
      <div class="row tw:bg-primary/20">
        <div class="col tw:border-primary tw:border tw:p-3">
          1 of 3
        </div>
        <div class="col tw:border-primary tw:border tw:p-3">
          2 of 3
        </div>
        <div class="col tw:border-primary tw:border tw:p-3">
          3 of 3
        </div>
      </div>
    </div>
  </section>

  <section class="tw:container tw:mx-auto tw:my-8 flow">
    <h2>Tailwind Layout Example</h2>
    <div class="tw:bg-gray-900 tw:py-24 sm:tw:py-32">
      <div class="tw:mx-auto tw:max-w-2xl tw:px-6 tw:lg:max-w-7xl tw:lg:px-8">
        <h2 class="tw:text-center tw:text-base/7 tw:font-semibold tw:text-indigo-400">Deploy faster</h2>
        <p
          class="tw:mx-auto tw:mt-2 tw:max-w-lg tw:text-center tw:text-4xl tw:font-semibold tw:tracking-tight tw:text-balance tw:text-white tw:sm:text-5xl">
          Everything you need to deploy your app</p>
        <div class="tw:mt-10 tw:grid tw:gap-4 tw:sm:mt-16 tw:lg:grid-cols-3 tw:lg:grid-rows-2">
          <div class="tw:relative tw:lg:row-span-2">
            <div class="tw:absolute tw:inset-px tw:rounded-lg tw:bg-gray-800 tw:lg:rounded-l-4xl"></div>
            <div
              class="tw:relative tw:flex tw:h-full tw:flex-col tw:overflow-hidden tw:rounded-[calc(var(--radius-lg)+1px)] tw:lg:rounded-l-[calc(2rem+1px)]">
              <div class="tw:px-8 tw:pt-8 tw:pb-3 tw:sm:px-10 tw:sm:pt-10 tw:sm:pb-0">
                <p class="tw:mt-2 tw:text-lg tw:font-medium tw:tracking-tight tw:text-white tw:max-lg:text-center">
                  Mobile friendly</p>
                <p class="tw:mt-2 tw:max-w-lg tw:text-sm/6 tw:text-gray-400 tw:max-lg:text-center">Anim aute id magna
                  aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
              </div>
              <div
                class="tw:@container tw:relative tw:min-h-120 tw:w-full tw:grow tw:max-lg:mx-auto tw:max-lg:max-w-sm">
                <div
                  class="tw:absolute tw:inset-x-10 tw:top-10 tw:bottom-0 tw:overflow-hidden tw:rounded-t-[12cqw] tw:border-x-[3cqw] tw:border-t-[3cqw] tw:border-gray-700 tw:bg-gray-900 tw:outline tw:outline-white/20">
                  <img src="https://www.tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    alt="tw:" class="tw:size-full tw:object-cover tw:object-top" />
                </div>
              </div>
            </div>
            <div
              class="tw:pointer-events-none tw:absolute tw:inset-px tw:rounded-lg tw:shadow-sm tw:outline tw:outline-white/15 tw:lg:rounded-l-4xl">
            </div>
          </div>
          <div class="tw:relative tw:max-lg:row-start-1">
            <div class="tw:absolute tw:inset-px tw:rounded-lg tw:bg-gray-800 tw:max-lg:rounded-t-4xl"></div>
            <div
              class="tw:relative tw:flex tw:h-full tw:flex-col tw:overflow-hidden tw:rounded-[calc(var(--radius-lg)+1px)] tw:max-lg:rounded-t-[calc(2rem+1px)]">
              <div class="tw:px-8 tw:pt-8 tw:sm:px-10 tw:sm:pt-10">
                <p class="tw:mt-2 tw:text-lg tw:font-medium tw:tracking-tight tw:text-white tw:max-lg:text-center">
                  Performance</p>
                <p class="tw:mt-2 tw:max-w-lg tw:text-sm/6 tw:text-gray-400 tw:max-lg:text-center">Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit maiores impedit.</p>
              </div>
              <div
                class="tw:flex tw:flex-1 tw:items-center tw:justify-center tw:px-8 tw:max-lg:pt-10 tw:max-lg:pb-12 tw:sm:px-10 tw:lg:pb-2">
                <img src="https://www.tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  alt="tw:" class="tw:w-full tw:max-lg:max-w-xs" />
              </div>
            </div>
            <div
              class="tw:pointer-events-none tw:absolute tw:inset-px tw:rounded-lg tw:shadow-sm tw:outline tw:outline-white/15 tw:max-lg:rounded-t-4xl">
            </div>
          </div>
          <div class="tw:relative tw:max-lg:row-start-3 tw:lg:col-start-2 tw:lg:row-start-2">
            <div class="tw:absolute tw:inset-px tw:rounded-lg tw:bg-gray-800"></div>
            <div
              class="tw:relative tw:flex tw:h-full tw:flex-col tw:overflow-hidden tw:rounded-[calc(var(--radius-lg)+1px)]">
              <div class="tw:px-8 tw:pt-8 tw:sm:px-10 tw:sm:pt-10">
                <p class="tw:mt-2 tw:text-lg tw:font-medium tw:tracking-tight tw:text-white tw:max-lg:text-center">
                  Security</p>
                <p class="tw:mt-2 tw:max-w-lg tw:text-sm/6 tw:text-gray-400 tw:max-lg:text-center">Morbi viverra dui mi
                  arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
              </div>
              <div class="tw:@container tw:flex tw:flex-1 tw:items-center tw:max-lg:py-6 tw:lg:pb-2">
                <img src="https://www.tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  alt="tw:" class="tw:h-[min(152px,40cqw)] tw:object-cover" />
              </div>
            </div>
            <div
              class="tw:pointer-events-none tw:absolute tw:inset-px tw:rounded-lg tw:shadow-sm tw:outline tw:outline-white/15">
            </div>
          </div>
          <div class="tw:relative tw:lg:row-span-2">
            <div
              class="tw:absolute tw:inset-px tw:rounded-lg tw:bg-gray-800 tw:max-lg:rounded-b-4xl tw:lg:rounded-r-4xl">
            </div>
            <div
              class="tw:relative tw:flex tw:h-full tw:flex-col tw:overflow-hidden tw:rounded-[calc(var(--radius-lg)+1px)] tw:max-lg:rounded-b-[calc(2rem+1px)] tw:lg:rounded-r-[calc(2rem+1px)]">
              <div class="tw:px-8 tw:pt-8 tw:pb-3 tw:sm:px-10 tw:sm:pt-10 tw:sm:pb-0">
                <p class="tw:mt-2 tw:text-lg tw:font-medium tw:tracking-tight tw:text-white tw:max-lg:text-center">
                  Powerful APIs</p>
                <p class="tw:mt-2 tw:max-w-lg tw:text-sm/6 tw:text-gray-400 tw:max-lg:text-center">Sit quis amet rutrum
                  tellus ullamcorper ultricies libero dolor eget sem sodales gravida.</p>
              </div>
              <div class="tw:relative tw:min-h-120 tw:w-full tw:grow">
                <div
                  class="tw:absolute tw:top-10 tw:right-0 tw:bottom-0 tw:left-10 tw:overflow-hidden tw:rounded-tl-xl tw:bg-gray-900/60 tw:outline tw:outline-white/10">
                  <div class="tw:flex tw:bg-gray-900 tw:outline tw:outline-white/5">
                    <div class="tw:-mb-px tw:flex tw:text-sm/6 tw:font-medium tw:text-gray-400">
                      <div
                        class="tw:border-r tw:border-b tw:border-r-white/10 tw:border-b-white/20 tw:bg-white/5 tw:px-4 tw:py-2 tw:text-white">
                        NotificationSetting.jsx</div>
                      <div class="tw:border-r tw:border-gray-600/10 tw:px-4 tw:py-2">App.jsx</div>
                    </div>
                  </div>
                  <div class="tw:px-6 tw:pt-6 tw:pb-14">
                    <!-- Your code example -->
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tw:pointer-events-none tw:absolute tw:inset-px tw:rounded-lg tw:shadow-sm tw:outline tw:outline-white/15 tw:max-lg:rounded-b-4xl tw:lg:rounded-r-4xl">
            </div>
          </div>
        </div>
      </div>
    </div>


  </section>

</template>