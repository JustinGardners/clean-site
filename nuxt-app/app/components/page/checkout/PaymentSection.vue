<script setup lang="ts">

const applyVoucher = ref(false);
const useDeliveryAsBilling = ref(false);

</script>

<template>

    <div class="checkoutSection" id="checkoutSummary">

        <ul>
            <!-- @digital delivery summary -->
            <!-- delivery address summary -->
            <li class="deliveryAddress">
                <h6>Delivery Address</h6>
                <div class="editButton">
                    <a href="/checkout?TD=rJkuUgmbBfNNgeY%252fzzhok06UZwx97Kd1pgveILztoaxhkvg8aTFBvym3Jk6g4cxuIZ63W%252fcNuMM87qGFhY5%252f3xxsq06jpNvJXxmb6DnkyycbqyviQcBCHS5j5sh6BYob6Xzr2HMYiMHcRjhKkHepNa6AL3uy7MCVZ2LSkeEeJcwGKN9XL1tCnUh7bUVpsGqqH9bieL4oGszLHqBmd3FyDx6tucj9PRH14Gze7jysisjAuAOoldN68UKyONkT0l8Yjfsywpka7%252bslf%252bmZzPgqWE1%252bo2pUT7QBLU8%252fFDDNq9%252foTnAgysQ5i4LJLcjzXMAF%252f99ckCUXInctXYdfPwkoCU6iO0jtR0e4XGnGvCU%252b3po%253d"
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
            <!-- delivery method summary -->

            <li class="deliveryMethod">
                <h6>Delivery Method</h6>

                <div class="editButton">
                    <!-- check if store or home delivery -->
                    <a href="/checkout/delivery?TD=rJkuUgmbBfNNgeY%252fzzhok06UZwx97Kd1pgveILztoaxhkvg8aTFBvym3Jk6g4cxuIZ63W%252fcNuMM87qGFhY5%252f3xxsq06jpNvJXxmb6DnkyycbqyviQcBCHS5j5sh6BYob6Xzr2HMYiMHcRjhKkHepNa6AL3uy7MCVZ2LSkeEeJcwGKN9XL1tCnUh7bUVpsGqqH9bieL4oGszLHqBmd3FyDx6tucj9PRH14Gze7jysisjAuAOoldN68UKyONkT0l8Yjfsywpka7%252bslf%252bmZzPgqWE1%252bo2pUT7QBLU8%252fFDDNq9%252foTnAgysQ5i4LJLcjzXMAF%252f99ckCUXInctXYdfPwkoCU6iO0jtR0e4XGnGvCU%252b3po%253d"
                        class="btn button btnEditCheckout">Edit</a>
                </div>

                <div class="displayBlock">
                    <div class="deliveryMethod">Standard Delivery</div>
                </div>
            </li>
            <!-- @delivery method summary -->
            <!-- vouchers and coupons summary -->
        </ul>

    </div>

    <div class="checkout-main-section" id="billingDetails">
        <!-- billing details form -->
        <form action="/checkout/billing" id="BillingAddress" method="post" novalidate="novalidate"><input
                name="__RequestVerificationToken" type="hidden"
                value="7iVe2cDZT5r8JpC15iHSuJFEe9d3y-Oji5ThdaCIuCDRTCGV6i4TONA6ZSqFyMMICV86G3j8X92l5Aqrp6sBcMdDoCk3iYY0dNydzNMnwnCBKngJ0"><input
                id="TD" name="TD" type="hidden"
                value="rJkuUgmbBfNNgeY%2fzzhok06UZwx97Kd1pgveILztoaxhkvg8aTFBvym3Jk6g4cxuIZ63W%2fcNuMM87qGFhY5%2f3xxsq06jpNvJXxmb6DnkyycbqyviQcBCHS5j5sh6BYob6Xzr2HMYiMHcRjhKkHepNa6AL3uy7MCVZ2LSkeEeJcwGKN9XL1tCnUh7bUVpsGqqH9bieL4oGszLHqBmd3FyDx6tucj9PRH14Gze7jysisjAuAOoldN68UKyONkT0l8Yjfsywpka7%2bslf%2bmZzPgqWE1%2bo2pUT7QBLU8%2fFDDNq9%2foTnAgysQ5i4LJLcjzXMAF%2f99ckCUXInctXYdfPwkoCbmstdLq0sjugYYsm9CfmCI%3d"><input
                data-val="true" data-val-number="The field TotalPrice must be a number."
                data-val-required="TotalPrice required" id="TotalPrice" name="TotalPrice" type="hidden" value="42.9700">
            <!-- payment type container -->
            <div class="checkoutSection paymentContainer">

                <h4>Payment Type</h4>


                <!-- vouchers container -->


                <!-- add vouchers option -->
                <div id="applyVoucherWrap" class="addVoucherOption">
                    <div class="custom-control custom-checkbox voucherOption">
                        <input type="checkbox" id="voucherCheckbox" name="voucherCheckbox" class="custom-control-input" v-model="applyVoucher">
                        <label for="voucherCheckbox" class="custom-control-label">Add an Issued Payment Voucher</label>
                    </div>

                </div>
                <!-- @add vouchers option -->

                <!-- vouchers and coupons summary -->
                <div class="vouchersCoupons voucherDetails">

                    <!-- vouchers applied -->
                    <div id="appliedVouchers">

                        <div class="description noVouchersApplied">No vouchers applied</div>
                    </div>
                    <!-- @vouchers applied -->

                    <!-- vouchers input fields -->
                    <div id="applyVoucher" v-show="applyVoucher">
                        <div class="form-group">
                            <label class="voucherLabel" for="VoucherCodePt1">Enter 'XY' Payment Voucher Code
                                Number</label>
                            <div class="voucherInputs"><input class="form-control voucherInput" data-mini="true"
                                    data-val="true" data-val-length="Must be under 2 characters" data-val-length-max="2"
                                    data-val-regex="Invalid voucher code" data-val-regex-pattern="[xX][yY]"
                                    id="VoucherCodePt1" name="VoucherCodePt1" type="text" value="XY" maxlength="2">
                            </div>
                            <div class="voucherInputs"><input class="form-control voucherInput" data-mini="true"
                                    data-val="true" data-val-length="Must be under 4 characters" data-val-length-max="4"
                                    data-val-regex="Invalid voucher code" data-val-regex-pattern="\d{4}"
                                    id="VoucherCodePt2" name="VoucherCodePt2" type="text" value="" maxlength="4"></div>
                            <div class="voucherInputs"><input class="form-control voucherInput" data-mini="true"
                                    data-val="true" data-val-length="Must be under 4 characters" data-val-length-max="4"
                                    data-val-regex="Invalid voucher code" data-val-regex-pattern="\d{4}"
                                    id="VoucherCodePt3" name="VoucherCodePt3" type="text" value="" maxlength="4"></div>
                            <div class="voucherInputs"><input class="form-control voucherInput" data-mini="true"
                                    data-val="true" data-val-length="Must be under 4 characters" data-val-length-max="4"
                                    data-val-regex="Invalid voucher code" data-val-regex-pattern="\d{4}"
                                    id="VoucherCodePt4" name="VoucherCodePt4" type="text" value="" maxlength="4"></div>
                            <div class="voucherInputs"><input class="form-control voucherInput" data-mini="true"
                                    data-val="true" data-val-length="Must be under 4 characters" data-val-length-max="4"
                                    data-val-regex="Invalid voucher code" data-val-regex-pattern="\d{4}"
                                    id="VoucherCodePt5" name="VoucherCodePt5" type="text" value="" maxlength="4"></div>

                        </div>

                        <div class="voucherButtons">
                            <input type="button" id="voucherPaymentBtnCancel" class="button voucherBtn" value="Cancel">
                            <input type="button" id="voucherPaymentBtnApply" class="button voucherBtn" value="Apply">
                        </div>

                    </div>
                    <!-- @vouchers input fields -->

                    <!-- success message -->
                    <p id="voucherSuccessMessage" class="validation-summary-valid" style="display: none;">
                        <span></span>
                    </p>
                    <!-- @success message -->

                    <!-- failed message -->
                    <p id="voucherErrorMessage" class="validation-summary-errors" style="display: none;">
                        <span></span>
                    </p>
                    <!-- @failed message -->

                </div>
                <!-- @vouchers and coupons summary -->


                <!-- @vouchers container -->

                <div id="paymentTypeContainerWrapper">
                    <div class="radioOptions paymentTypeContainer">




                        <div class="custom-control custom-radio paymentTypeMasterCardOption">
                            <input type="radio" class="custom-control-input" id="paymentTypeCreditCardRadioBtn"
                                name="ProviderType" value="Braintree">

                            <label for="paymentTypeCreditCardRadioBtn" class="custom-control-label">Pay with
                                UK-registered credit or debit card</label>
                            <div class="creditCards paymentMethodIcon"></div>
                        </div>

                        <!-- <script src="https://pay.google.com/gp/p/js/pay.js"></script>
                        <script src="https://js.braintreegateway.com/web/3.99.0/js/client.min.js"></script>
                        <script src="https://js.braintreegateway.com/web/3.99.0/js/google-payment.min.js"></script>
                        <script src="https://js.braintreegateway.com/web/3.99.0/js/three-d-secure.min.js"></script>
                        <script src="/public/javascript/Payment/PaymentGoogle.js?v=639002922315625261"></script> -->


                        <div class="custom-control custom-radio paymentTypeGoogleOption">
                            <input type="radio" class="custom-control-input" id="paymentTypeGoogleRadioBtn"
                                name="ProviderType" value="Google">
                            <label for="paymentTypeGoogleRadioBtn" class="custom-control-label">Google Pay</label>
                            <div class="google paymentMethodIcon"></div>
                        </div>

                        <!-- <script>
    $(document).ready(function () {
        var gm = "BCR2DN5T63M4DKZA";
        var env = "PRODUCTION";
        if (!paymentProviderGoogle.isAvailable(env,gm)) {
            $(".paymentTypeGoogleOption").remove();
        }
    });
</script> -->





<!-- 
                        <script src="https://js.braintreegateway.com/web/3.99.0/js/client.min.js"></script>
                        <script src="https://js.braintreegateway.com/web/3.99.0/js/apple-pay.min.js"></script>
                        <script src="/public/javascript/Payment/PaymentApple.js?v=639002922315625261"></script> -->



                        <div class="custom-control custom-radio paymentTypeAppleOption">
                            <input type="radio" class="custom-control-input" id="paymentTypeAppleRadioBtn"
                                name="ProviderType" value="Apple">
                            <label for="paymentTypeAppleRadioBtn" class="custom-control-label">Pay with Apple</label>
                            <div class="apple paymentMethodIcon"></div>
                        </div>

                        <!-- <script>
    $(document).ready(function () {
        if (!paymentProviderApple.applePayAvailable()) {
           $(".paymentTypeAppleOption").remove();  
        }
    });
</script> -->
                    </div>
                </div>
            </div>
            <!-- @payment type container -->
            <!-- billing container -->
            <div class="checkoutSection billingContainer">
                <h4>Billing Address</h4>


                <div class="radioOptions">
                    <div class="custom-control custom-radio billingUseDeliveryOption">
                        <input type="radio" id="billingUseDeliveryRadioBtn" class="custom-control-input"
                            name="UseDeliveryAsBillingAddress" v-model="useDeliveryAsBilling" :value="true">
                        <label for="billingUseDeliveryRadioBtn" class="custom-control-label">Use delivery address for
                            billing</label>
                        <div class="description">This is the address you're specified to deliver your order to</div>
                    </div>
                    <div class="custom-control custom-radio billingEnterNewOption">
                        <input type="radio" id="billingNewAddressRadioBtn" class="custom-control-input"
                            name="UseDeliveryAsBillingAddress" v-model="useDeliveryAsBilling" :value="false">
                        <label for="billingNewAddressRadioBtn" class="custom-control-label">Enter a new billing
                            address</label>
                        <div class="description">This is the address associated with the payment method you will use
                        </div>
                    </div>
                </div>
                <!-- billing address fields -->
                <div id="billingFields" class="inputFields checkoutShow" v-if="!useDeliveryAsBilling">



                    <div class="countryGroup">
                        <div class="form-group">
                            <label for="BillingAddress_Country">Country</label>

                            <span class="subTitle">UK-registered cards permitted only</span>
                            <select class="form-control countryDisabled" data-val="true"
                                data-val-length="Must be under 35 characters" data-val-length-max="35"
                                data-val-regex="Use letters only" data-val-regex-pattern="^[^\d]+$" disabled="disabled"
                                id="BillingAddress_Country" name="BillingAddress.Country">
                                <option selected="selected" value="United Kingdom">United Kingdom</option>
                            </select>
                            <span class="field-validation-valid validateCountry"
                                data-valmsg-for="BillingAddress.Country" data-valmsg-replace="true"></span>

                            <span class="ebookWarning"></span>
                        </div>


                    </div>



                    <div class="form-group postcodeGavLookup postcodeLookupContainer" style="display: none;">
                        <label>Find address by postcode<span class="postcodeError"
                                style="display: none;"></span></label>
                        <input class="form-control postcodeLookup" id="postcodeLookup" name="postcodeLookup"
                            placeholder="Postcode" type="text" value="">
                        <a class="btn button btnLookupPostcode">Find Address</a>
                    </div>
                    <!-- enter address manually container -->
                    <div class="form-group enterAddressContainer" style="display: none;">
                        <a class="btnEnterAddress">Enter Address Manually</a>
                    </div>
                    <!-- @enter address manually container -->
                    <!-- search by post code -->
                    <div class="form-group searchByContainer checkoutShow" style="display: block;">
                        <a class="btnSearchBy">Search by Postcode</a>
                    </div>
                    <!-- search by post code -->
                    <!-- postcode results container -->
                    <div class="form-group postcodeSelectorContainer" style="display: none;">

                        <label><span></span></label>

                        <div class="postcodeResults"></div>
                    </div>
                    <!-- @postcode results container -->
                    <!-- @post code -->
                    <!-- billing address fields -->
                    <div class="manualAddress">
                        <div class="addressFields checkoutShow" style="display: block;">
                            <div class="form-group labelName">
                                <label for="BillingAddress_BillingName" class="required">Payee's Name</label>
                                <span class="subTitle">Name on Card</span>
                                <input class="form-control name" data-val="true"
                                    data-val-required="Biller's Name required" id="BillingAddress_BillingName"
                                    name="BillingAddress.BillingName" placeholder="Biller's Name" type="text" value="">
                                <span class="field-validation-valid validateBillersName"
                                    data-valmsg-for="BillingAddress.BillingName" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group manualAddress1">
                                <label class="labelAddressLine1 required"
                                    for="BillingAddress_AddressLine1">Address</label>
                                <input class="form-control addressLine1" data-val="true"
                                    data-val-length="Must be under 35 characters" data-val-length-max="35"
                                    data-val-required="Address required" id="BillingAddress_AddressLine1"
                                    name="BillingAddress.AddressLine1" placeholder="Line 1" type="text"
                                    value="59 CASTLE HILL ROAD" maxlength="35">
                                <span class="field-validation-valid validateAddressLine1"
                                    data-valmsg-for="BillingAddress.AddressLine1" data-valmsg-replace="true"></span>

                            </div>
                            <div id="addressLine2" class="form-group manualAddress1">
                                <label class="labelAddressLine1 required"
                                    for="BillingAddress_AddressLine1">Address</label>
                                <input class="form-control addressLine2" data-val="true"
                                    data-val-length="Must be under 35 characters" data-val-length-max="35"
                                    id="BillingAddress_AddressLine2" name="BillingAddress.AddressLine2"
                                    placeholder="Line 2" type="text" value="" maxlength="35">
                                <span class="field-validation-valid validateAddressLine2"
                                    data-valmsg-for="BillingAddress.AddressLine2" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group manualTown">
                                <label class="labelTown required" for="BillingAddress_Town">Town / City</label>
                                <input class="form-control town" data-val="true"
                                    data-val-length="Must be under 35 characters" data-val-length-max="35"
                                    data-val-regex="Use letters only" data-val-regex-pattern="^[^\d]+$"
                                    data-val-required="Town / City required" id="BillingAddress_Town"
                                    name="BillingAddress.Town" placeholder="Town" type="text" value="HASTINGS"
                                    maxlength="35">
                                <span class="field-validation-valid validateTown" data-valmsg-for="BillingAddress.Town"
                                    data-valmsg-replace="true"></span>
                            </div>

                            <div class="form-group manualCounty">
                                <label class="labelCounty required" for="BillingAddress_County">County</label>
                                <input class="form-control county" data-val="true"
                                    data-val-length="Must be under 35 characters" data-val-length-max="35"
                                    data-val-regex="Use letters only" data-val-regex-pattern="^[^\d]+$"
                                    data-val-required="County/State Required" id="BillingAddress_County"
                                    name="BillingAddress.County" placeholder="County/province/state" type="text"
                                    value="EAST SUSSEX" maxlength="35">
                                <span class="field-validation-valid validateCounty"
                                    data-valmsg-for="BillingAddress.County" data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group manualPostcode">
                                <label class="labelPostcode required" for="BillingAddress_PostCode">Postcode</label>
                                <input class="form-control postcode deliveryPostcode" data-val="true"
                                    data-val-required="Postcode required" id="BillingAddress_PostCode"
                                    name="BillingAddress.PostCode" placeholder="Postcode" type="text" value="TN34 3RA">
                                <span class="field-validation-valid labelPostcodeValidation"
                                    data-valmsg-for="BillingAddress.PostCode" data-valmsg-replace="true"></span>
                            </div>

                            <div class="clearAllContainer">
                                <a class="btnClearAll longTextField">Clear All</a>
                            </div>
                        </div>
                    </div>
                    <div class="requiredFields">* Required fields</div>
                    <div class="addressErrors errorMessages validation-summary-errors"></div>

                    <!-- 'remember my address' checkbox -->

                    <div id="rememberAddress" class="custom-control custom-checkbox checkboxOptions">
                        <input checked="checked" class="custom-control-input" data-val="true"
                            data-val-required="Remember my address for next time required"
                            id="BillingAddress_RememberAddress" name="BillingAddress.RememberAddress" type="checkbox"
                            value="true"><input name="BillingAddress.RememberAddress" type="hidden" value="false">
                        <label class="custom-control-label" for="BillingAddress_RememberAddress">Remember my address for
                            next time</label>
                        <div class="description">Store this as my default billing address</div>
                    </div>
                    <!-- @'remember my address' checkbox -->


                </div>
                <!-- @billing address fields -->
            </div>
            <!-- @billing container -->
            <!-- digital/ebook confirmation -->
            <!-- @digital/ebook confirmation -->
            <!-- terms and conditions -->
            <!-- @terms and conditions -->
            <!-- navigation buttons -->
            <div class="checkoutSection navigationButtons paymentNavigation">

                <!-- back button -->

                <a class="btn button btnNavigate paymentNavBack" href="javascript:window.history.back();">Back</a>

                <!-- @back button -->
                <!-- form submit button -->
                <input id="btnSubmitBilling" type="submit" value="Pay Securely Now"
                    class="btn btn-primary button btnNavigate paymentNavContinue">
                <!-- @form submit button -->

            </div>
            <!-- @navigation buttons -->
        </form> <!-- @billing details form -->

    </div>

</template>