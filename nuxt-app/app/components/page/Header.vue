<template>
    <header id="headerWrap">

        <div id="header">
            <div class="container-md">
                <div class="row">

                    <div id="storeLogo" class="header__logoWrap">
                        <a class="header__logo" href="/" title="Telegraph bookshop">
                            <h1>Telegraph bookshop</h1>
                        </a>
                    </div>

                    <!-- top menu -->
                    <div id="miniBasket">
                        <!-- basket total -->
                        <div class="details">
                            <a href="/basket">
                                <span class="imageHolder"></span>
                                <span id="uxSmallBasketQuantity"><span class="number">0</span><span class="text">
                                        items</span></span>
                                <span id="uxSmallBasketTotal"><span class="number">£0.00</span></span>
                                <span class="basketText">Basket</span>
                            </a>
                            <p></p>
                            <!--<span id="checkoutLink"><a href="https://books.telegraph.co.uk/Basket">Basket</a></span>-->
                        </div>
                        <!-- @ basket total -->
                    </div>
                    <!-- navigation bar -->
                    <div id="navSupport">

                        <div id="miniNav">



                            <div class="smallText">Click here to login</div>
                            <a class="dropdownToggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" rel="nofollow">
                                <span class="navMyAccount"><span>My </span>Account</span>
                            </a>

                            <ul class="dropdown-menu accountNav" aria-labelledby="dropdownMenuLink">
                                <li id="navMenuAccount" class="dropdown-item"><a
                                        href="https://books.telegraph.co.uk/Account" rel="nofollow">My account</a></li>
                                <li id="navMenuLogoff" class="dropdown-item">
                                    <a href="https://books.telegraph.co.uk/Account/Logon">Sign In or Register</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div id="wishlistLink"><a href="/Account/Wishlist">Wishlist</a></div>
                    <div class="navExtraButtons">
                        <ul>
                            <li><a href="https://www.telegraph.co.uk/">Visit the Telegraph</a></li>
                        </ul>
                    </div>
                    <div id="navButton" class="navbar-light">
                        <a class="navbarToggle" aria-controls="navMain" aria-label="Toggle navigation"><span
                                class="togglerText">Menu</span></a>
                    </div>
                    <div id="searchClicker">
                        <div class="click"><i class="fa fa-search" aria-hidden="true"></i><span>search</span></div>
                    </div>


                    <!-- @ navigation bar -->
                    <!-- search bar -->
                    <div id="searchBar">

                        <form id="SearchForm" action="/Search/Keyword" method="post">

                            <div id="searchBox">
                                <div class="productType "><label for="productType">Select a product type</label> <select
                                        id="productType" name="productType" class="custom-select">
                                        <option value="0" selected="selected">All Products</option>
                                        <option value="-1" disabled="disabled">---------------------</option>
                                        <option value="1">Book</option>
                                        <option value="5">eBook</option>
                                        <option value="6">Merchandise</option>
                                        <option value="8">eAudiobook</option>
                                        <option value="9">Customisable Book</option>
                                    </select></div>

                                <label for="keyword">Search for a product</label><input id="keyword"
                                    class="form-control ui-autocomplete-input" name="keyword" type="text"
                                    placeholder="Search" required="" autocomplete="off"><input type="submit"
                                    value="Search">
                            </div>

                        </form>

                    </div>
                    <!-- @search bar -->
                </div>
            </div>
        </div>
        <div id="nav" class="">
            <div id="navWrap">
                <div id="navMain">
                    <div class="menuText"><span>Navigation</span><span id="navClickerX">X</span></div>


                    <ul class="primary">
                        <li>
                            <a href="/books" class="mm__trigger">Book Genres</a>
                        </li>
                        <li>
                            <a href="/featured-in-the-telegraph" class="mm__trigger">Featured in the Telegraph</a>
                        </li>
                        <li>
                            <a href="/customitems" class="mm__trigger">Custom Items</a>
                        </li>
                        <li>
                            <a href="/telegraph-titles" class="mm__trigger">Telegraph Titles</a>
                        </li>
                        <li>
                            <a href="/best-book-lists" class="mm__trigger">Best Books Lists</a>
                        </li>

                    </ul>


                    <ul id="mobileExtras">
                        <li data-role="list-divider" role="heading" data-theme="a" class="ui-li-divider ui-bar-a">
                            Options</li>
                        <li id="navMenuAccount"><a href="/Account" data-role="none"
                                class="ui-btn ui-btn-icon-right ui-icon-carat-r">My
                                account</a></li>
                        <li id="navMenuLogoff"><a href="/Account/Logoff" data-role="none" data-ajax="false"
                                class="ui-btn ui-btn-icon-right ui-icon-carat-r">Log off</a></li>
                        <li id="navMenuHelp"><a href="/Help" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Help</a>
                        </li>
                        <li class="ui-btn"><a href="https://www.telegraph.co.uk/" target="_blank">Visit The
                                Telegraph</a></li>
                    </ul>
                </div>
            </div>
            <div class="clear"></div>
        </div>





    </header>

</template>