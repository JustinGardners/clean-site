<script setup lang="ts">

onMounted(() => {
    const navBtn = document.querySelector('.mobileFacetClose');
    navBtn?.addEventListener('click', () => {
        document.body.classList.remove('facetShow');
    });
});

</script>

<template>
    <div class="leftNavWrap">
        <div class="navSection facets">
            <div class="navSectionItem">
                <h4 class="navBrowse"><span class="showResults">Show results for</span></h4>
                <div id="refineBy">
                    <div class="refineItem" data-solr-field-name="FacetPublication">
                        <h5>Publication</h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a rel="nofollow" href="/Search/This-week?fq=-0311">This week </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/Next-Week?fq=-0316">Next Week </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/Next-4-Weeks?fq=-0318">Next 4 Weeks
                                </a></li>
                        </ul>
                    </div>
                    <div class="refineItem" data-solr-field-name="FacetStarRating">
                        <h5>Star Rating</h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a rel="nofollow" href="/Search/5-Star?fq=-4135">5 Star </a></li>
                        </ul>
                    </div>
                    <div class="refineItem" data-solr-field-name="FacetProductCategory">
                        <h5>Product</h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a href="/Search/Books?fq=-01120">Books </a></li>
                            <li class=""><a href="/Search/eBooks?fq=-01124">eBooks </a></li>
                            <li class=""><a href="/Search/Gifts-Memorabilia?fq=-01125">Gifts &amp;
                                    Memorabilia </a></li>
                            <li class=""><a href="/Search/eAudiobooks?fq=-01127">eAudiobooks </a></li>
                            <li class=""><a href="/Search/Customisable-Books?fq=-01128">Customisable Books
                                </a></li>
                        </ul>
                    </div>
                    <div class="refineItem" data-solr-field-name="FacetBookBrowseGenealogy">
                        <h5><a rel="nofollow" href="/Search/Books?fq=01120-01124-01127">Book Categories</a>
                        </h5>
                        <ul class="facetDetailList  withoutCheckboxes drillable">
                            <li class=""><a href="/Search/Art-Photography?fq=-121000">Art &amp; Photography
                                </a></li>
                            <li class=""><a href="/Search/Biography?fq=-121111">Biography </a></li>
                            <li class=""><a href="/Search/Business-Finance-and-Law?fq=-121138">Business,Finance and
                                    Law </a></li>
                            <li class=""><a href="/Search/Childrens?fq=-121488">Children's </a></li>
                            <li class=""><a href="/Search/Comics-and-Graphic-Novels?fq=-121612">Comics and
                                    Graphic Novels </a></li>
                            <li class="facetShowMore facetExpander"><span>+ </span>See more</li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Computing?fq=-121618">Computing </a></li>
                            <li class="facetExpandable" style="display: none;"><a href="/Search/Crime?fq=-121800">Crime
                                </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Education?fq=-121804">Education </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Fiction?fq=-121934">Fiction </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Food-Drink?fq=-121956">Food &amp; Drink </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Health-Lifestyle?fq=-122007">Health &amp; Lifestyle </a>
                            </li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/History-Transport?fq=-122046">History &amp; Transport </a>
                            </li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Hobbies-Games?fq=-122168">Hobbies &amp; Games </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Home-Garden?fq=-122211">Home &amp; Garden </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Humour?fq=-122257">Humour </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Mind-Body-Spirit?fq=-122264">Mind, Body, Spirit </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Music-Stage-Screen?fq=-122303">Music, Stage &amp; Screen
                                </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Natural-History-Pets?fq=-122386">Natural History &amp;
                                    Pets </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Poetry-Drama?fq=-122415">Poetry &amp; Drama </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Politics-Philosophy-Religion?fq=-122422">Politics,
                                    Philosophy &amp; Religion </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Reference?fq=-122623">Reference </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Reference-Languages?fq=-122680">Reference &amp; Languages
                                </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Romance?fq=-122879">Romance </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Science-Fiction-Fantasy-Horror?fq=-122883">Science
                                    Fiction, Fantasy &amp; Horror </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Scientific-Technical-and-Medical?fq=-122891">Scientific,
                                    Technical and Medical </a></li>
                            <li class="facetExpandable" style="display: none;"><a href="/Search/Sport?fq=-123505">Sport
                                </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Stationery-Items?fq=-123591">Stationery Items </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Travel?fq=-123596">Travel </a></li>
                            <li class="facetExpandable" style="display: none;"><a
                                    href="/Search/Literature-Literary-Studies?fq=-123619">Literature &amp;
                                    Literary Studies </a></li>
                            <li class="facetShowLess facetExpander" style="display:none"><span>- </span>See
                                fewer</li>
                        </ul>
                    </div><span class="refineMore"></span>
                    <div class="refineItem" data-solr-field-name="FacetMusicGenre">
                        <h5><a rel="nofollow" href="/Search/CD-Vinyl?fq=01122-01126">CD &amp; Vinyl</a></h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a href="/Search/Classical?fq=-31222">Classical </a></li>
                            <li class=""><a href="/Search/Gospel-Christian?fq=-31229">Gospel/Christian </a>
                            </li>
                            <li class=""><a href="/Search/New-Age?fq=-31234">New Age </a></li>
                            <li class=""><a href="/Search/Spoken-Word?fq=-31242">Spoken Word </a></li>
                        </ul>
                    </div>
                    <div class="refineItem" data-solr-field-name="FacetMerchandiseCategory">
                        <h5><a rel="nofollow" href="/Search01125">Gifts &amp; Memorabilia</a></h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a href="/Search/Apron?fq=-409987624">Apron </a></li>
                        </ul>
                    </div>
                    <div class="refineItem" data-solr-field-name="FacetPrice">
                        <h5>Price</h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a rel="nofollow" href="/Search/Under-£5?fq=-021">Under £5 </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/Under-£5?fq=-021">Under £5 </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/£5-to-£10?fq=-022">£5 to £10 </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/£5-to-£10?fq=-022">£5 to £10 </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/£10-to-£20?fq=-023">£10 to £20 </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/£20-to-£35?fq=-024">£20 to £35 </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/£35-to-£50?fq=-025">£35 to £50 </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/Over-£50?fq=-026">Over £50 </a>
                            </li>
                        </ul>
                    </div>
                    <div class="refineItem" data-solr-field-name="FacetCurriculumLevel">
                        <h5>Curriculum Level</h5>
                        <ul class="facetDetailList  withoutCheckboxes drillable">
                            <li class=""><a rel="nofollow" href="/Search/Scottish?fq=01120--603710">Scottish
                                </a></li>
                            <li class=""><a rel="nofollow" href="/Search/ELT?fq=01120--603720">ELT </a></li>
                            <li class=""><a rel="nofollow" href="/Search/Vocational?fq=01120--603721">Vocational </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/GNVQ?fq=01120--6037213727">GNVQ
                                </a></li>
                            <li class=""><a rel="nofollow" href="/Search/BTEC?fq=01120--6037213732">BTEC
                                </a></li>
                            <li class=""><a rel="nofollow" href="/Search/International?fq=01120--603733">International
                                </a></li>
                            <li class=""><a rel="nofollow" href="/Search/Irish?fq=01120--603736">Irish </a>
                            </li>
                        </ul>
                    </div><span class="refineMore"></span>
                    <div class="refineItem" data-solr-field-name="FacetReadingAge">
                        <h5>Reading Age</h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a rel="nofollow" href="/Search/Early-Years?fq=01120--50270">Early
                                    Years </a></li>
                            <li class=""><a rel="nofollow" href="/Search/Age-5-?fq=01120--50271">Age 5+ </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/Age-7-?fq=01120--50272">Age 7+ </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/Age-9-?fq=01120--50273">Age 9+ </a>
                            </li>
                            <li class=""><a rel="nofollow" href="/Search/Age-11-?fq=01120--50274">Age 11+
                                </a></li>
                            <li class=""><a rel="nofollow" href="/Search/Age-13-?fq=01120--50275">Age 13+
                                </a></li>
                            <li class=""><a rel="nofollow" href="/Search/Reluctant?fq=01120--50276">Reluctant </a></li>
                        </ul>
                    </div>
                    <div class="refineItem" data-solr-field-name="FacetDvdCertificate">
                        <h5>Certificate</h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a rel="nofollow" href="/Search/U?fq=-22200">U </a></li>
                            <li class=""><a rel="nofollow" href="/Search/12?fq=-22204">12 </a></li>
                        </ul>
                    </div>
                    <div class="refineItem" data-solr-field-name="FacetAvailability">
                        <h5>Availability</h5>
                        <ul class="facetDetailList  withoutCheckboxes">
                            <li class=""><a href="/Search/In-Stock?fq=4260">In Stock </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="mobileFacetClose"><span class="mobileFacetCloseButton">X</span></div>
    </div>
</template>