<template>
    <div id="searchClicker">
        <div class="click">
            <i class="fa fa-search" aria-hidden="true"></i><span>search</span>
        </div>
    </div>

    <!-- @ navigation bar -->
    <!-- search bar -->
    <div id="searchBar">
        <form id="SearchForm" action="/Search/Keyword" method="post">
            <div id="searchBox">
                <div class="productType">
                    <label for="productType">Select a product type</label>
                    <select id="productType" name="productType" class="custom-select">
                        <option value="0" selected="selected">All Products</option>
                        <option value="-1" disabled="disabled">
                            ---------------------
                        </option>
                        <option value="1">Book</option>
                        <option value="5">eBook</option>
                        <option value="6">Merchandise</option>
                        <option value="8">eAudiobook</option>
                        <option value="9">Customisable Book</option>
                    </select>
                </div>

                <label for="keyword">Search for a product</label><input id="keyword"
                    class="form-control ui-autocomplete-input" name="keyword" type="text" placeholder="Search"
                    required="" autocomplete="off" /><input type="submit" value="Search" />
            </div>
        </form>
    </div>
</template>