<script setup lang="ts">

const { displayMenu = false } = defineProps<{
    displayMenu: boolean;
}>();

</script>

<template>
    <div class="megaMenu" v-show="displayMenu">
        <ul class="categoryContainer">
            <li class="categoryColumn">
                <ul class="categories">
                    <li class="category">
                        <div class="group-label" style="">Genres </div>
                        <ul class="dropdown-group">
                            <li class="group-link"> <a href="/books/art-and-photography" class=""> Art &amp;
                                    Photography </a> </li>
                            <li class="group-link"> <a href="/books/biography" class=""> Biography </a> </li>
                            <li class="group-link"> <a href="/books/childrens" class=""> Children’s Books </a> </li>
                            <li class="group-link"><a href="/books/classics " class="">Classic Fiction</a></li>
                            <li class="group-link"> <a href="/books/comics-and-graphic-novels" class=""> Comics
                                    &amp; Graphic Novels </a> </li>

                            <li class="group-link"> <a href="/books/craft" class=""> Craft </a> </li>
                            <li class="group-link"> <a href="/books/crime-thrillers-and-mystery" class=""> Crime
                                    &amp; Mystery </a> </li>
                            <li class="group-link"> <a href="/books/fiction" class=""> Fiction </a> </li>
                            <li class="group-link"> <a href="/books/food-and-drink" class=""> Food &amp; Drink </a>
                            </li>
                            <li class="group-link"> <a href="/books/health-and-lifestyle" class=""> Health &amp;
                                    Lifestyle </a> </li>

                            <li class="group-link"> <a href="/books/history-transport" class=""> History &amp;
                                    Transport </a> </li>
                            <li class="group-link"> <a href="/books/home-and-garden" class=""> Home &amp; Garden </a>
                            </li>
                            <li class="group-link"> <a href="/books/humour" class=""> Humour </a> </li>
                            <li class="group-link"><a href="/books/national-poetry-month" class="">Poetry</a></li>


                            <li class="group-link"> <a href="/books/science-fiction-fantasy-horror" class=""> Sci-fi,
                                    Fantasy &amp; Horror </a> </li>
                            <li class="group-link"> <a href="/books/sport" class=""> Sport </a> </li>
                            <li class="group-link"> <a href="/books/thriller-books" class=""> Thriller </a> </li>
                            <li class="group-link"> <a href="/books/travel" class=""> Travel &amp; Holidays </a> </li>
                            <li class="group-link"><a href="/books/translated-fiction " class="">Translated Fiction </a>
                            </li>
                            <li class="group-link"> <a href="/books/young-adult" class=""> Young Adult </a> </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="categoryColumn">
                <ul class="categories">
                    <li class="category">
                        <div class="group-label" style="">Browse</div>
                        <ul class="dropdown-group">
                            <li class="group-link"> <a href="/books/new-releases" class=""> New Releases </a> </li>
                            <li class="group-link"> <a href="/books/bestsellers" class=""> Bestselling Books </a> </li>
                            <li class="group-link"> <a href="/books/pre-orders" class=""> Coming Soon </a> </li>
                            <li class="group-link"> <a href="/books/adaptations" class=""> Book Adaptations </a> </li>
                            <li class="group-link"> <a href="/books/awards" class=""> Book Awards </a> </li>
                        </ul>
                    </li>
                    <li class="category">
                        <div class="group-label" style="">Featured</div>
                        <ul class="dropdown-group">
                            <li class="group-link"> <a href="/books/author-of-the-month" class=""> Author of the
                                    Month </a> </li>
                            <li class="group-link"> <a href="/books/childrens-book-of-the-month" class=""> Children's
                                    Book of the Month </a> </li>
                            <li class="group-link"><a href="/books/booktok-bestseller-list" class="">BookTok Bestseller
                                    List</a></li>
                            <li class="group-link"> <a href="/books/book-of-the-month" class=""> Book of the Month </a>
                            </li>
                            <li class="group-link"><a href="/books/rising-writers" class="">Rising Writers</a></li>
                            <li class="group-link"><a href="/inclusive-books-for-children" class="">Inclusive Books for
                                    Children</a></li>
                            <li class="group-link"><a href="/books/coming-soon" class="">Books We Are Excited For In
                                    2026</a></li>
                            <li class="group-link"><a href="/books/good-housekeeping-good-books" class="">Good
                                    Housekeeping Good Books</a></li>
                            <li class="group-link"><a href="/books/japanese-translations" class="">Translated Japanese
                                    Fiction</a></li>
                            <li class="group-link"><a href="/books/gift-books" class="">Gift Books</a></li>
                            <li class="group-link"><a href="/books/start-a-series" class="">Start a Series</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="categoryColumn">
                <ul class="categories">
                    <li class="category">
                        <div class="group-label" style="">Offers (Discounts up to)</div>
                        <ul class="dropdown-group">
                            <li class="group-link"><a href="/offers/dvd-a" class="">4K Blu-ray Savings</a></li>








                            <li class="group-link"><a href="/offers/stationery-journals" class="">Save on Beautiful
                                    Journals</a></li>
                            <li class="group-link"><a href="/offers/vinyl" class="">Save on Bestselling Vinyl</a></li>
                            <li class="group-link"><a href="/offers/fiction" class="">25% off Horror Fiction</a></li>
                            <li class="group-link"><a href="/offers/best-of" class="">25% off New Hardback Fiction</a>
                            </li>
                            <li class="group-link"><a href="/offers/hobbies" class="">30% off Baking Books</a></li>
                            <li class="group-link"><a href="/offers/classics" class="">30% off Collectable Classics</a>
                            </li>
                            <li class="group-link"><a href="/offers/graphic-novels" class="">30% off DC Comic Books</a>
                            </li>
                            <li class="group-link"><a href="/offers/key-releases" class="">Key New Releases</a></li>
                        </ul>
                    </li>
                    <li class="category">
                        <div class="group-label" style="">Popular Features</div>
                        <ul class="dropdown-group">
                            <li class="group-link"><a href="/books/booktok" class="">BookTok</a></li>
                            <li class="group-link"><a href="/books/cosy-crime" class="">Cosy Crime</a></li>
                            <li class="group-link"><a href="/books/historical-fiction" class="">Historical Fiction</a>
                            </li>
                            <li class="group-link"><a href="/books/nature-and-the-environment" class="">Nature and
                                    Environment Books</a></li>
                            <li class="group-link"><a href="/books/romantasy" class="">Romantasy </a></li>
                            <li class="group-link"><a href="/books/romantic-fiction" class="">Romantic Fiction</a></li>
                            <li class="group-link"><a href="/books/special-editions" class="">Special Editions</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="categoryColumn">
                <ul class="categories">
                    <li class="category">
                        <div class="group-label" style="">Seasonal Features</div>
                        <ul class="dropdown-group">


                            <li class="group-link"><a href="/books/halloween" class="">Halloween Shop</a></li>
                            <li class="group-link"> <a href="/books/study-zone" class=""> Study Zone </a> </li>
                            <li class="group-link"> <a href="/books" class="viewAll"> View all in Books </a> </li>
                        </ul>
                    </li>
                    <li class="category">
                        <div class="group-label" style="">The Hive Edit</div>
                        <ul class="dropdown-group">
                            <li class="group-link"><a href="/the-hive-edit/black-history-month" class="">Black History
                                    Month</a></li>
                            <li class="group-link"><a href="/the-hive-edit/autumnal-books" class="">Autumnal Books</a>
                            </li>
                            <li class="group-link"><a href="/the-hive-edit/halloween-books-for-children"
                                    class="">Halloween Books for Children</a></li>
                            <li class="group-link"><a href="/the-hive-edit/the-best-horror-books-to-read-this-halloween"
                                    class="">Horror Books to Read This Halloween</a></li>
                            <li class="group-link"><a href="/the-hive-edit/what-to-read-if-you-loved-verity"
                                    class="">What to Read if you Loved Verity</a></li>
                            <li class="group-link"><a href="/the-hive-edit/dark-academia-books" class="">Dark Academia
                                    Books</a></li>
                            <li class="group-link"><a href="/the-hive-edit/a-reading-guide-to-sarah-j-maas" class="">A
                                    Reading Guide to Sarah J. Maas</a></li>



                            <li class="group-link"><a href="/the-hive-edit/recommended-by-booksellers"
                                    class="">Bookseller Recommendations </a></li>
                            <li class="group-link"><a href="/the-hive-edit" class="viewAll">View all in The Hive
                                    Edit</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>