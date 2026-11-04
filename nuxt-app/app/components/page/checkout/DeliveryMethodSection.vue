<template>
    <!-- order summary -->
    <div class="checkoutSection" id="checkoutSummary">

        <ul>

            <!-- digital delivery summary -->
            <!-- @digital delivery summary -->
            <!-- delivery address summary -->



            <li class="deliveryAddress">
                <h6>Delivery Address</h6>
                <div class="editButton">
                    <a href="/checkout?TD=rJkuUgmbBfNNgeY%252fzzhok06UZwx97Kd1pgveILztoaxhkvg8aTFBvym3Jk6g4cxuIZ63W%252fcNuMM87qGFhY5%252f31xBCgWTLQ5rPdsHE5%252fWKqZdgOiW3qwXhQgsRVuPT3SU6UmceeOjRDiyHykd%252f9SWsq3D4BRsuz4f5I84DjCYsR71HFqyT%252btJ6TGM2BsN2Xva3ZzXXigoEnd5AwLkA2e9AkPCGC%252fNdLOOOggXEWi%252f40e8fSdSyZcZvGXMLDGu40gS0JqyLd3BviuihjqPViKLrqMQ9PWJNaT6vnYlk8Nb7i0ZmzGiVfdzR0RQemzLWfLoO40drJ7GuGO4A13NfbcAjNvtjMBV4TsU68aqy0wouh4%253d"
                        class="ui-btn button btnEditCheckout">Edit</a>
                </div>
                <div class="displayBlock">

                    <div class="deliveryName">Mr Justin Small</div>

                    <div class="deliveryAddress">
                        59 CASTLE HILL ROAD,
                        HASTINGS,
                        EAST SUSSEX,
                        United Kingdom,
                        TN34 3RA
                    </div>


                    <!-- @gift message -->
                </div>
            </li>
            <!-- @delivery address summary -->

            <!-- @delivery address summary -->

        </ul>

    </div>
    <!-- @order summary -->
    <!-- delivery details -->
    <div class="checkout-main-section" id="deliveryDetails">
        <form action="/checkout/delivery" id="DeliveryMethod" method="post" novalidate="novalidate"><input
                name="__RequestVerificationToken" type="hidden"
                value="JRqU7Hvzw-SBnO9KnTIgQoPUvsNjcSNt5IDTy1f__gVXe1-AswjuIc7gD3L1BeVG0yS8leit5wZ0kYVoNpItaWFzf8MJWa2LVVEdXdkEiKBJ-S0_0"><input
                id="TD" name="TD" type="hidden"
                value="rJkuUgmbBfNNgeY%2fzzhok06UZwx97Kd1pgveILztoaxhkvg8aTFBvym3Jk6g4cxuIZ63W%2fcNuMM87qGFhY5%2f31xBCgWTLQ5rPdsHE5%2fWKqZdgOiW3qwXhQgsRVuPT3SU6UmceeOjRDiyHykd%2f9SWsq3D4BRsuz4f5I84DjCYsR71HFqyT%2btJ6TGM2BsN2Xva3ZzXXigoEnd5AwLkA2e9AkPCGC%2fNdLOOOggXEWi%2f40e8fSdSyZcZvGXMLDGu40gS0JqyLd3BviuihjqPViKLrqMQ9PWJNaT6vnYlk8Nb7i0ZmzGiVfdzR0RQemzLWfLoaH2tApX7lmuGK6TmdBkSdoCtAFx%2ftT3JPWy3a7og6oo%3d">
            <!-- delivery method -->
            <div class="checkoutSection" id="deliveryMethod">

                <h4>Delivery Method</h4>


                <input id="DeliveryZoneId" name="DeliveryZoneId" type="hidden" value="1">

                <!-- delivery options -->
                <div id="deliveryOptions" class="displayBlock">

                    <div id="deliveryOptionsWrapper">
                        <input id="DeliveryZoneName" name="DeliveryZoneName" type="hidden" value="United Kingdom">

                        <div class="deliveryOptionsLabel">

                            <div>Choose from our standard or premium delivery service</div>

                        </div>

                        <!-- delivery method -->
                        <div class="radioOptions deliveryMethodContainer">

                            <div class="deliveryMethods">
                                <div class="custom-control custom-radio deliveryOption deliveryOption0">
                                    <input id="deliveryOption0" checked="checked" class="custom-control-input"
                                        name="DeliveryOptionId" data-price="0.0000" data-title="Standard" value="1"
                                        type="radio"><label for="deliveryOption0" class="custom-control-label"><span
                                            class="custom-control-input__detail"></span>Standard <span
                                            class="highlighted">Free</span><span class="description">Estimated delivery
                                            within 5 working
                                            days</span></label>
                                </div>
                                <div class="custom-control custom-radio deliveryOption deliveryOption1">
                                    <input id="deliveryOption1" class="custom-control-input" name="DeliveryOptionId"
                                        data-price="3.9900" data-title="Premium" value="2" type="radio"><label
                                        for="deliveryOption1" class="custom-control-label"><span
                                            class="custom-control-input__detail"></span>Premium <span
                                            class="highlighted">£3.99</span><span class="description">Estimated delivery
                                            within 2 working
                                            days</span></label>
                                </div>
                                <div class="custom-control custom-radio deliveryOption deliveryOption2">
                                    <input id="deliveryOption2" class="custom-control-input" name="DeliveryOptionId"
                                        data-price="4.5000" data-title="Premium + Signature" value="7"
                                        type="radio"><label for="deliveryOption2" class="custom-control-label"><span
                                            class="custom-control-input__detail"></span>Premium + Signature
                                        <span class="highlighted">£4.50</span><span class="description">Estimated
                                            delivery next working day if
                                            ordered before 2pm</span></label>
                                </div>
                            </div>

                        </div>
                        <!-- @delivery method -->


                    </div>

                </div>
                <!-- @delivery options -->

            </div>
            <!-- @delivery method -->
            <!-- delivery instructions -->
            <div id="deliveryInstructions" class="checkoutSection">

                <h4>Delivery Instructions</h4>


                <div id="deliveryDetails">

                    <div class="contactNumber">
                        <!-- customisable products message -->

                        <!-- delivery instructions text description -->
                        <div class="deliveryUpdateText subTitle">
                            Where available we will update you on the status of your order via SMS. Please
                            ensure the number below is the best number to update you on.
                        </div>
                        <!-- @delivery instructions text description -->
                        <div class="form-group">
                            <!-- mobile number header -->
                            <label class="mobileNumberLabel" for="DeliverySmsNumber">Mobile number</label>
                            <!-- @mobile number header -->
                            <!-- mobile number text description -->
                            <div class="subTitle">Used only to text you delivery details</div>
                            <!-- @mobile number text description -->
                            <!-- mobile number field -->
                            <input autocomplete="off" class="form-control mobileNumberField" data-val="true"
                                data-val-length="Must be under 15 characters" data-val-length-max="15"
                                id="DeliverySmsNumber" name="DeliverySmsNumber" placeholder="Your mobile phone number"
                                type="text" value="" maxlength="15">
                            <span class="field-validation-valid" data-valmsg-for="DeliverySmsNumber"
                                data-valmsg-replace="true"></span>
                            <!-- @mobile number field -->
                        </div>
                    </div>

                    <div class="safePlace">

                        <!-- safe place header -->
                        <div class="deliverySafePlaceDesc">Tell us where to leave it if you aren't in.
                            Please be aware that not all couriers may be able to follow your instructions
                        </div>
                        <!-- @safe place header -->
                        <div class="form-group">

                            <!-- safe place text description -->
                            <label class="deliverySafePlace" for="DeliverySafePlace">Select a safe
                                place</label>
                            <!-- @safe place text description -->
                            <div class="deliverySafePlaceDesc">Tell us where to leave it if you aren't in.
                                Please be aware that not all couriers may be able to follow your
                                instructions</div>
                            <!-- safe place drop down -->
                            <select class="custom-select" data-val="true" data-val-length="Must be under 24 characters"
                                data-val-length-max="24" id="DeliverySafePlace" name="DeliverySafePlace">
                                <option value="">Please select...</option>
                                <option>Front porch</option>
                                <option>Rear Porch</option>
                                <option>Side Gate</option>
                                <option>Garage</option>
                                <option>Shed</option>
                                <option>Greenhouse</option>
                                <option>Next-door Neighbour</option>
                                <option>Reception</option>
                                <option>Other..</option>
                            </select>
                            <!-- @safe place drop down -->
                        </div>
                        <!-- safe place 'other' text box -->
                        <div id="deliverySafePlaceOtherWrapper" style="display: none;">
                            <label class="deliverySafePlaceLabel" for="DeliverySafePlaceOther">Please leave
                                your notes here</label>
                            <input class="form-control" data-val="true" data-val-length="Must be under 24 characters"
                                data-val-length-max="24" id="DeliverySafePlaceOther" maxlength="24"
                                name="DeliverySafePlaceOther" placeholder="Your safe place suggestion" type="text"
                                value="">

                            <span id="DeliverySafePlaceOtherValidation" class="field-validation-error"
                                data-valmsg-for="DeliverySafePlaceOther" data-valmsg-replace="true">
                                Safe place suggestion cannot be empty
                            </span>

                            <span id="deliverySafePlaceOtherRemaining">24 characters remaining</span>

                        </div>
                        <!-- @safe place 'other' text box -->


                    </div>

                </div>


            </div>
            <!-- @delivery instructions-->
            <!-- navigation buttons -->
            <div class="checkoutSection navigationButtons" id="navigationButtons">

                <!-- back button -->

                <a class="ui-btn button btnNavigate deliveryMethodNavBack"
                    href="javascript:window.history.back();">Back</a>
                <!-- @back button -->
                <!-- form submit button -->
                <input id="btnSubmitDelivery"
                    class="btn btn-primary button btnContinue btnNavigate deliveryMethodNavContinue" type="submit"
                    value="Continue to Payment" data-theme="b">
                <!-- @form submit button -->

            </div>
            <!-- @navigation buttons -->
        </form>
    </div>
    <!-- @delivery details -->

</template>