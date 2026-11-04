<script setup lang="ts">
import type { DeliverySection } from '~/types'
const delivery = defineModel<DeliverySection>({ required: true })

// Replace the object so field edits emit update:modelValue to the parent.
function field<K extends keyof DeliverySection>(key: K) {
    return computed({
        get: () => delivery.value[key],
        set: (value: DeliverySection[K]) => {
            delivery.value = { ...delivery.value, [key]: value }
        },
    })
}

const model = reactive({
    title: field('title'),
    firstName: field('firstName'),
    lastName: field('lastName'),
    phone: field('phone'),
    address: field('address'),
    addressTwo: field('addressTwo'),
    townCity: field('townCity'),
    county: field('county'),
    postcode: field('postcode'),
    country: field('country'),
    isGift: field('isGift'),
})
</script>
<template>

    <div class="checkout-main-section" id="deliverySection">
        <!-- in-store delivery -->
        <!-- @in-store delivery -->
        <!-- home delivery -->
        <div id="homeDelivery" class="checkoutShow" style="display: block;">

            <form action="/checkout" id="DeliveryAddress" method="post" novalidate="novalidate"><input
                    name="__RequestVerificationToken" type="hidden"
                    value="64PaydlFOE4Xu2ZkLjJh_V1HfbAHxzV9m4iFh9x54hwiHnS0qM89pqW0uPVEgyXOnsTNcl_ZUwiLpRua6MBc_FUgQfZ440Yxp31n8VJnNPagR8Ml0"><input
                    id="TD" name="TD" type="hidden"
                    value="rJkuUgmbBfNNgeY%2fzzhok06UZwx97Kd1pgveILztoaxhkvg8aTFBvym3Jk6g4cxu5Tejap7LS1SNZFjZWzxnPvy13jxgsKjotIIDhvE9AC6yMoTWoLqpLlCrP5FAAMztsKFzxvgSMQRGhEvoyCiP5HHy6QzuAmCHATpmInTjSDU4XWlteOT%2bnL4usQVVbMqIVGGRNBH57LGdZWOW0oUOgEHVDc8xagIlw32A0NR8MfaC4ojSDKx%2fQ1NSJbGUAV6Mlbe16mskeXOw1ftludWJOZAdYjS8pu3hwBckYpuWM5JXODaP9Dqpj0ueT12LCvgwwkcqPHYMH%2f8aZR6e%2f9l6OLwO9DJuvvhm47V8d3W4ZkY%3d">
                <div class="checkoutSection" id="homeDeliveryWrapper">
                    <h4>Delivery Address</h4>

                    <div id="addressBookSelector" class="inputFields addressBookSelector">


                        <!-- address book selector -->
                        <div id="selectDeliveryAddress">


                            <!-- select existing address -->

                            <div id="deliveryAddressSelect">
                                <div class="form-group">
                                    <label><span>Select address </span>from your address book</label>
                                    <select class="custom-select" data-val="true"
                                        data-val-number="The field Choose delivery address must be a number."
                                        data-val-required="Choose delivery address required"
                                        id="AddressBookSelector_UserDeliveryAddressId"
                                        name="AddressBookSelector.UserDeliveryAddressId">
                                        <option value="-1" selected="selected">Please select...</option>
                                        <option selected="selected" value="35514">Justin, 59 CASTLE HILL
                                            ROAD</option>
                                    </select>
                                </div>
                            </div>

                            <!-- @select existing address -->


                        </div>
                        <!-- @address book selector -->

                        <!-- new address input fields -->
                        <div id="addNewDeliveryAddress">
                            <input data-val="true" data-val-number="The field UserAddressId must be a number."
                                data-val-required="UserAddressId required" id="DeliveryAddress_UserAddressId"
                                name="DeliveryAddress.UserAddressId" type="hidden" value="35514">
                            <div class="newDeliveryAddressWrapper">
                                <!-- add new address -->
                                <div id="deliveryFields">

                                    <div class="title form-group">
                                        <label for="DeliveryAddress_UserTitlePrefixTypeId"
                                            class="required">Title</label>
                                        <select autocomplete="off" class="custom-select" data-val="true"
                                            data-val-number="The field Title must be a number."
                                            data-val-required="Title required"
                                            id="DeliveryAddress_UserTitlePrefixTypeId"
                                            name="DeliveryAddress.UserTitlePrefixTypeId" v-model="model.title">
                                            <option value=""></option>
                                            <option value="Mr">Mr</option>
                                            <option value="Mrs">Mrs</option>
                                            <option value="Ms">Ms</option>
                                            <option value="Miss">Miss</option>
                                            <option value="Doctor">Doctor</option>
                                            <option value="Lord">Lord</option>
                                            <option value="Lady">Lady</option>
                                            <option value="Sir">Sir</option>
                                            <option value="Dame">Dame</option>
                                            <option value="Mx">Mx</option>
                                            <option value="Professor">Professor</option>
                                            <option value="Rev">Rev</option>
                                        </select>
                                    </div>

                                    <div class="firstName form-group">
                                        <label for="DeliveryAddress_FirstName" class="required">First
                                            Name</label>
                                        <input autocomplete="off" class="form-control" data-val="true"
                                            data-val-length="Must be under 35 characters" data-val-length-max="35"
                                            data-val-required="First Name required" id="DeliveryAddress_FirstName"
                                            name="DeliveryAddress.FirstName" placeholder="First Name" type="text"
                                            maxlength="35" v-model="model.firstName">
                                        <span class="field-validation-valid validateFirstName"
                                            data-valmsg-for="DeliveryAddress.FirstName"
                                            data-valmsg-replace="true"></span>
                                    </div>

                                    <div class="lastName form-group">
                                        <label for="DeliveryAddress_LastName" class="required">Last
                                            Name</label>
                                        <input class="form-control" data-val="true"
                                            data-val-length="Must be under 35 characters" data-val-length-max="35"
                                            data-val-required="Last Name required" id="DeliveryAddress_LastName"
                                            name="DeliveryAddress.LastName" placeholder="Last Name" type="text"
                                            maxlength="35" v-model="model.lastName">
                                        <span class="field-validation-valid validateLastName"
                                            data-valmsg-for="DeliveryAddress.LastName"
                                            data-valmsg-replace="true"></span>
                                    </div>
                                    <div class="phone form-group">
                                        <label for="DeliveryAddress_Phone">Phone</label>
                                        <input class="form-control" data-val="true"
                                            data-val-length="Must be under 25 characters" data-val-length-max="25"
                                            data-val-regex="Use Numbers only " data-val-regex-pattern="^[0-9 +]+$"
                                            id="DeliveryAddress_Phone" name="DeliveryAddress.Phone"
                                            placeholder="Telephone Number" v-model="model.phone" type="text"
                                            maxlength="25">
                                        <span class="field-validation-valid" data-valmsg-for="DeliveryAddress.Phone"
                                            data-valmsg-replace="true"></span>

                                    </div>



                                    <!-- @phone -->
                                    <!-- country -->
                                    <!-- @country -->
                                    <!-- post code -->
                                    <div class="postcodeLookupContainer form-group" style="display: none;">
                                        <label for="postcodeLookup">Find address by postcode</label>
                                        <input class="form-control postcodeLookup" id="postcodeLookup"
                                            name="postcodeLookup" placeholder="Postcode" type="text" value="">
                                        <a class="ui-btn button btnLookupPostcode">Find Address</a>
                                        <span class="postcodeError" style="display: none;"></span>
                                    </div>
                                    <!-- enter address manually container -->
                                    <div class="enterAddressContainer" style="display: none;">
                                        <a class="btnEnterAddress">Enter Address Manually</a>
                                    </div>
                                    <!-- @enter address manually container -->
                                    <!-- search by post code -->
                                    <div class="searchByContainer checkoutShow" style="display: block;">
                                        <a class="btnSearchBy longTextField">Search by Postcode</a>
                                    </div>
                                    <!-- search by post code -->
                                    <!-- postcode results container -->
                                    <div class="postcodeSelectorContainer form-group" style="display: none;">
                                        <label class="labelField">&nbsp;</label>
                                        <div class="postcodeResults"></div>
                                    </div>
                                    <!-- @postcode results container -->
                                    <!-- @post code -->
                                    <!-- address fields -->
                                    <div class="manualAddress">

                                        <div class="addressFields displayNone checkoutShow" style="display: block;">

                                            <div class="addressLine1Wrap form-group">
                                                <label class="labelAddressLine1 required"
                                                    for="DeliveryAddress_AddressLine1">Address</label>
                                                <input class="form-control addressLine1" data-val="true"
                                                    data-val-length="Must be under 35 characters"
                                                    data-val-length-max="35" data-val-required="Address required"
                                                    id="DeliveryAddress_AddressLine1"
                                                    name="DeliveryAddress.AddressLine1" placeholder="Address"
                                                    type="text" v-model="model.address" maxlength="35">
                                                <span class="field-validation-valid validateAddressLine1"
                                                    data-valmsg-for="DeliveryAddress.AddressLine1"
                                                    data-valmsg-replace="true"></span>
                                            </div>
                                            <div class="addressLine2Wrap form-group">
                                                <label class="labelAddressLine2"
                                                    for="DeliveryAddress_AddressLine2">Address 2
                                                    (Optional)</label>
                                                <input class="form-control addressLine2" data-val="true"
                                                    data-val-length="Must be under 35 characters"
                                                    data-val-length-max="35" id="DeliveryAddress_AddressLine2"
                                                    name="DeliveryAddress.AddressLine2" placeholder="Line 2" type="text"
                                                    v-model="model.addressTwo" maxlength="35">
                                                <span class="field-validation-valid validateAddressLine2"
                                                    data-valmsg-for="DeliveryAddress.AddressLine2"
                                                    data-valmsg-replace="true"></span>
                                            </div>
                                            <div class="townWrap form-group">
                                                <label class="labelTown required" for="DeliveryAddress_Town">Town /
                                                    City</label>
                                                <input class="form-control town" data-val="true"
                                                    data-val-length="Must be under 35 characters"
                                                    data-val-length-max="35" data-val-regex="Use letters only"
                                                    data-val-regex-pattern="^[^\d]+$"
                                                    data-val-required="Town / City required" id="DeliveryAddress_Town"
                                                    name="DeliveryAddress.Town" placeholder="Town" type="text"
                                                    v-model="model.townCity" maxlength="35">
                                                <span class="field-validation-valid validateTown"
                                                    data-valmsg-for="DeliveryAddress.Town"
                                                    data-valmsg-replace="true"></span>
                                            </div>
                                            <div class="countyWrap form-group">
                                                <label class="labelCounty required"
                                                    for="DeliveryAddress_County">County</label>
                                                <input class="form-control county" data-val="true"
                                                    data-val-length="Must be under 35 characters"
                                                    data-val-length-max="35" data-val-regex="Use letters only"
                                                    data-val-regex-pattern="^[^\d]+$"
                                                    data-val-required="County/State Required"
                                                    id="DeliveryAddress_County" name="DeliveryAddress.County"
                                                    placeholder="County/province/state" type="text"
                                                    v-model="model.county" maxlength="35">
                                                <span class="field-validation-valid validateCounty"
                                                    data-valmsg-for="DeliveryAddress.County"
                                                    data-valmsg-replace="true"></span>
                                            </div>
                                            <div class="postcodeWrap form-group">
                                                <label class="labelPostcode required"
                                                    for="DeliveryAddress_PostCode">Postcode</label>
                                                <input class="form-control postcode deliveryPostcode" data-val="true"
                                                    data-val-required="Postcode required" id="DeliveryAddress_PostCode"
                                                    name="DeliveryAddress.PostCode" placeholder="Postcode" type="text"
                                                    v-model="model.postcode">
                                                <span class="field-validation-valid validatePostcode"
                                                    data-valmsg-for="DeliveryAddress.PostCode"
                                                    data-valmsg-replace="true"></span>
                                            </div>

                                            <!-- @postcode -->
                                            <!-- disabled country -->
                                            <div class="countryWrap form-group">
                                                <label class="labelCountry"
                                                    for="DeliveryAddress_Country">Country</label>
                                                <input class="form-control countryDisabled" data-val="true"
                                                    data-val-length="Must be under 35 characters"
                                                    data-val-length-max="35" data-val-regex="Use letters only"
                                                    data-val-regex-pattern="^[^\d]+$" disabled="disabled"
                                                    id="DeliveryAddress_Country" name="DeliveryAddress.Country"
                                                    placeholder="Country" style="background-image:none;" type="text"
                                                    v-model="model.country" maxlength="35">
                                                <span class="field-validation-valid validateCountry"
                                                    data-valmsg-for="DeliveryAddress.Country"
                                                    data-valmsg-replace="true"></span>
                                            </div>
                                            <!-- @disabled country -->
                                            <!-- clear all fields container -->
                                            <div class="clearAllContainer">
                                                <a class="btnClearAll">Clear All</a>
                                            </div>
                                            <!-- @clear all fields container -->

                                        </div>

                                    </div>
                                    <!-- @address fields -->

                                </div>
                                <!-- @add new address -->

                                <div class="requiredFields">
                                    <span>* Required fields</span>
                                </div>

                                <div class="addressErrors errorMessages validation-summary-errors">
                                </div>

                                <!-- 'remember my address' -->

                                <div id="rememberAddress" class="checkboxOptions" style="display: none;">
                                    <div class="digitalOption">
                                        <div class="custom-control custom-checkbox">
                                            <input class="custom-control-input" data-val="true"
                                                data-val-required="Remember my address for next time required"
                                                id="DeliveryAddress_RememberAddress"
                                                name="DeliveryAddress.RememberAddress" type="checkbox"
                                                value="true"><input name="DeliveryAddress.RememberAddress" type="hidden"
                                                value="false">
                                            <label class="custom-control-label"
                                                for="DeliveryAddress_RememberAddress">Remember my
                                                address
                                                for next time</label><span>Save this address to your
                                                address
                                                book</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- @'remember my address' checkbox -->


                            </div>


                            <!-- @new address input fields -->
                        </div>


                    </div>


                    <!-- gifting options -->

                    <div id="gifting">

                        <div class="checkboxOptions">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input" data-val="true"
                                    data-val-required="Is the order a gift? required" id="giftingCheckbox" name="IsGift"
                                    type="checkbox" v-model="model.isGift"><input name="IsGift" type="hidden"
                                    value="false">
                                <label for="giftingCheckbox" class="clickBox giftingOption custom-control-label">This
                                    order is a
                                    gift</label><span>Select to include a gift message with your
                                    order</span>
                            </div>
                        </div>

                        <div id="giftMessage" style="display:none;">
                            <label for="IncludeGiftMessage">Your Message</label>

                            <div class="customisableProductsGiftMessage giftSubText subTitle">Max. 60
                                characters per line</div>

                            <!-- input fields -->
                            <div class="giftMessage1 form-group">
                                <input autocomplete="off" class="form-control" data-val="true"
                                    data-val-length="Must be under 60 characters" data-val-length-max="60"
                                    id="GiftMessage1" name="GiftMessage1" placeholder="Your gift message" type="text"
                                    value="" maxlength="60">
                                <span class="field-validation-valid" data-valmsg-for="GiftMessage1"
                                    data-valmsg-replace="true"></span>
                            </div>
                            <div class="giftMessage2 form-group">
                                <input autocomplete="off" class="form-control" data-val="true"
                                    data-val-length="Must be under 60 characters" data-val-length-max="60"
                                    id="GiftMessage2" name="GiftMessage2" type="text" value="" maxlength="60">
                                <span class="field-validation-valid" data-valmsg-for="GiftMessage2"
                                    data-valmsg-replace="true"></span>
                            </div>
                            <div class="giftMessage3 form-group">
                                <input autocomplete="off" class="form-control" data-val="true"
                                    data-val-length="Must be under 60 characters" data-val-length-max="60"
                                    id="GiftMessage3" name="GiftMessage3" type="text" value="" maxlength="60">
                                <span class="field-validation-valid" data-valmsg-for="GiftMessage3"
                                    data-valmsg-replace="true"></span>
                            </div>
                            <!-- @input fields -->


                            <!-- customisable products message -->

                        </div>

                    </div>

                    <!-- @gifting options -->

                    <input data-val="true" data-val-length="Must be under 15 characters" data-val-length-max="15"
                        id="DeliverySmsNumber" name="DeliverySmsNumber" type="hidden" value="" maxlength="15">
                    <input data-val="true" data-val-length="Must be under 24 characters" data-val-length-max="24"
                        id="DeliverySafePlace" name="DeliverySafePlace" type="hidden" value="" maxlength="24">

                    <div class="checkoutSection navigationButtons" id="navigationButtons">

                        <a class="ui-btn button btnNavigate homeDeliveryNavBack"
                            href="javascript:window.history.back();">Back</a>


                        <input id="btnSubmitAddress" class="btn btn-primary button btnContinue btnNavigate"
                            type="submit" value="Continue to Delivery Method" data-theme="b">
                    </div>


                </div>
                <!-- hidden delivery options -->
                <div id="deliveryOptionsWrapper" style="display:none;"><input id="DeliveryZoneName"
                        name="DeliveryZoneName" type="hidden" value="United Kingdom">


                    <input id="DeliveryOptionId" name="DeliveryOptionId" type="hidden" value="1" data-title="Standard"
                        data-price="0.0000">

                </div>
                <!-- @hidden delivery options -->
            </form>
        </div>
        <!-- @home delivery -->
    </div>

</template>