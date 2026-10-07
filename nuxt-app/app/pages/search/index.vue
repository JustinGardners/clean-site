<script setup lang="ts">
import SearchRefineMenu from '~/components/page/SearchRefineMenu.vue';

definePageMeta({
    layout: 'search',
    props: {
        sidebar: true
    }
})

const props = defineProps<{
    sidebar: boolean
}>()

const { data: testProducts, error: testProductsError } = await useFetch("/api/test-products")

onMounted(() => {
    const navBtn = document.querySelector('.filterClicker');
    navBtn?.addEventListener('click', () => {
        document.body.classList.add('facetShow');
    });

    const expandRefineItems = document.querySelectorAll('.refineItem > h5');

    expandRefineItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = item.parentElement;
            if (parent) {
                parent.classList.toggle('visible');
            }
        });
    });

})



</script>

<template>



    <div class="container-md">
        <div class="row" id="searchResultsWrap">
            <div v-if="props.sidebar" id="leftNav">
                <SearchRefineMenu />
            </div>


            <div id="searchResults">

                <div class="searchResultItems">

                    <div id="top" class="searchControlsBar">

                        <div class="itemsPerPageForm">
                            <form action="/search/changesearchpageoptions" method="post"><input
                                    name="__RequestVerificationToken" type="hidden"
                                    value="trg97Nwp1_bcIsrU3-11UqP6KmKbuolMjt3icYlCgtmTGzymgYgyao1Rk_5UvobtyWER8M0f3La5zqW9UA6A3HwBjrY1"><input
                                    id="SearchParameters" name="SearchParameters" type="hidden" value="/Search?pg=1">
                                <div class="changeItemsPerPage sort">
                                    <label for="Sort">Sort</label>
                                    <select class="customSelect" id="Sort" name="Sort" onchange="this.form.submit();">
                                        <option selected="selected" value="1">Best Selling</option>
                                        <option value="2">Price Low - High</option>
                                        <option value="3">Price High - Low</option>
                                        <option value="4">Release Date</option>
                                        <option value="5">A-Z</option>
                                        <option value="6">Z-A</option>
                                    </select>
                                </div>
                                <div class="changeItemsPerPage itemsPerPage">
                                    <label for="ItemsPerPage">Items per page</label>
                                    <select class="customSelect" id="ItemsPerPage" name="ItemsPerPage"
                                        onchange="this.form.submit();">
                                        <option value="12">12</option>
                                        <option selected="selected" value="24">24</option>
                                        <option value="40">40</option>
                                    </select>
                                </div>

                        <!-- <p v-if="testProducts">Showing {{ testProducts.length }} test products</p>
                        <p v-if="testProductsError">Unable to load test products.</p> -->

                                <div class="foundProducts" v-if="testProducts && testProducts.length"><span class="showing">Showing </span> 1 - {{testProducts.length < 24 ? testProducts.length : 24}}
                                    <span class="of"> (of {{testProducts.length}})</span>
                                </div>
                                <div class="pageNavigation">

                                    <nav aria-label="Search Pagination" class="mainPagination">
                                        <ul class="pagination count-5 ">

                                            <li class="pageItem disabled first"><span class="pageLink">«</span></li>

                                            <li class="pageItem highLightPage first">
                                                <a class="pageLink" href="/Search?pg=1">1</a>
                                            </li>
                                            <li class="pageItem ">
                                                <a class="pageLink" href="/Search?pg=2">2</a>
                                            </li>
                                            <li class="pageItem ">
                                                <a class="pageLink" href="/Search?pg=3">3</a>
                                            </li>
                                            <li class="pageItem ">
                                                <a class="pageLink" href="/Search?pg=4">4</a>
                                            </li>
                                            <li class="pageItem ">
                                                <a class="pageLink" href="/Search?pg=5">5</a>
                                            </li>

                                            <li class="pageItem last"><a class="pageLink" href="/Search?pg=2"><span
                                                        aria-hidden="true">»</span><span class="sr-only">Next</span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <nav aria-label="Search Pagination" class="altPagination">
                                        <ul class="pagination">

                                            <li class="pageItem disabled first"><span class="pageLink">«</span></li>

                                            <li><span>Showing </span> 1 - 24
                                                (of 4574151)</li>

                                            <li class="pageItem last"><a class="pageLink" href="/Search?pg=2"><span
                                                        aria-hidden="true">»</span><span class="sr-only">Next</span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="filterClicker"><span>Refine</span></div>
                            </form>
                        </div>
                    </div>
                    <!-- <div class="tw:col-span-full">
                        <h1 class="heading-lg">Test products</h1>
                        <p v-if="testProducts">Showing {{ testProducts.length }} test products</p>
                        <p v-if="testProductsError">Unable to load test products.</p>
                    </div> -->
                    <template v-if="testProducts" minColumnWidth="15" :columns="4" type="grid">
                        <template v-for="(item, index) in testProducts" :key="item.product.raw.productId ?? index">
                            <SearchResultsProductItem :item="item" />
                        </template>
                    </template>
                    <p v-else>Loading test products...</p>


                    <div id="bottom" class="searchControlsBar">

                        <div class="itemsPerPageForm">
                            <form action="/search/changesearchpageoptions" method="post"><input
                                    name="__RequestVerificationToken" type="hidden"
                                    value="d3JuYchZEdn_1YZLCJSKj0WTEM7QjJvYWASs-q-kE7UK5cCruLO7ywELhkm0mbFJlOwAnsMqRDO5-vWCrzg9M1z_OAw1"><input
                                    id="SearchParameters" name="SearchParameters" type="hidden" value="/Search?pg=1">
                                <div class="changeItemsPerPage sort">
                                    <label for="Sort">Sort</label>
                                    <select class="customSelect" id="Sort" name="Sort" onchange="this.form.submit();">
                                        <option selected="selected" value="1">Best Selling</option>
                                        <option value="2">Price Low - High</option>
                                        <option value="3">Price High - Low</option>
                                        <option value="4">Release Date</option>
                                        <option value="5">A-Z</option>
                                        <option value="6">Z-A</option>
                                    </select>
                                </div>
                                <div class="changeItemsPerPage itemsPerPage">
                                    <label for="ItemsPerPage">Items per page</label>
                                    <select class="customSelect" id="ItemsPerPage" name="ItemsPerPage"
                                        onchange="this.form.submit();">
                                        <option value="12">12</option>
                                        <option selected="selected" value="24">24</option>
                                        <option value="40">40</option>
                                    </select>
                                </div>
                                <div class="foundProducts"><span class="showing">Showing </span> 1 - 24
                                    <span class="of"> (of 4574151)</span>
                                </div>
                                <div class="pageNavigation">

                                    <nav aria-label="Search Pagination" class="mainPagination">
                                        <ul class="pagination count-5 ">

                                            <li class="pageItem disabled first"><span class="pageLink">«</span></li>

                                            <li class="pageItem highLightPage first">
                                                <a class="pageLink" href="/Search?pg=1">1</a>
                                            </li>
                                            <li class="pageItem ">
                                                <a class="pageLink" href="/Search?pg=2">2</a>
                                            </li>
                                            <li class="pageItem ">
                                                <a class="pageLink" href="/Search?pg=3">3</a>
                                            </li>
                                            <li class="pageItem ">
                                                <a class="pageLink" href="/Search?pg=4">4</a>
                                            </li>
                                            <li class="pageItem ">
                                                <a class="pageLink" href="/Search?pg=5">5</a>
                                            </li>

                                            <li class="pageItem last"><a class="pageLink" href="/Search?pg=2"><span
                                                        aria-hidden="true">»</span><span class="sr-only">Next</span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <nav aria-label="Search Pagination" class="altPagination">
                                        <ul class="pagination">

                                            <li class="pageItem disabled first"><span class="pageLink">«</span></li>

                                            <li><span>Showing </span> 1 - 24
                                                (of 4574151)</li>

                                            <li class="pageItem last"><a class="pageLink" href="/Search?pg=2"><span
                                                        aria-hidden="true">»</span><span class="sr-only">Next</span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="filterClicker"><span>Refine</span></div>
                            </form>
                        </div>



                    </div>



                </div>
            </div>

        </div>
    </div>



</template>