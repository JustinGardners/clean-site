<script setup lang="ts">

const loginForm = reactive({
    ReturningEmail: '',
    Password: '',
    RememberMe: false
});

definePageMeta({
    layout: 'account'
});

</script>

<template>
    <div class="myAccountWrap">
        <div class="myAccountContents">
            <div class="myAccountHeader">
                <h2>Login or Register</h2>
                {{ loginForm }}
            </div>
            <div class="myAccountMain">

                <div class="myAccountSection customerReturning">

                    <h4>Returning Customers</h4>

                    <!-- errors -->

                    <div class="field-validation-valid alert" data-valmsg-for="ReturningError"
                        data-valmsg-replace="true"></div>

                    <!-- @errors -->

                    <form action="/account/logon" method="post" novalidate="novalidate"><input
                            name="__RequestVerificationToken" type="hidden"
                            value="jypXzjjWOzoCjSUjg1jV_RmDHvcQbEaX1Otsmw5tLewAG_yirO5OkD3p-Vhzvlor-S4ctaOIlEA_HR1vjzu4Sb0HJOQ1"><input
                            name="IsFromCheckout" data-val="true" data-val-required="IsFromCheckout required"
                            id="IsFromCheckout" type="hidden" value="False"><input name="ReturnURL" id="ReturnURL"
                            type="hidden" value="">
                        <div class="loginFields">
                            <div class="form-group eAdd">
                                <label for="ReturningEmail" class="required">Email Address</label>
                                <input v-model="loginForm.ReturningEmail" name="ReturningEmail" class="form-control" data-val="true"
                                    data-val-email="Please enter a valid email address"
                                    data-val-required="Email Address required" id="ReturningEmail" type="text">
                                <span class="field-validation-valid" data-valmsg-for="ReturningEmail"
                                    data-valmsg-replace="true"></span>
                            </div>
                            <div class="form-group pass">
                                <label for="Password">Password</label>
                                <input v-model="loginForm.Password" name="Password" class="form-control" data-val="true"
                                    data-val-required="Password required" id="Password" type="password">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" id="showPassword" class="custom-control-input"
                                        onclick="storeFront.togglePasswordVisibility(this,'Password')"><label
                                        class="custom-control-label" for="showPassword">Show Password</label>
                                </div>
                                <span class="field-validation-valid" data-valmsg-for="Password"
                                    data-valmsg-replace="true"></span>
                            </div>
                            <div class="custom-control custom-checkbox rememberMe">
                                <input name="RememberMe" class="custom-control-input" data-val="true"
                                    data-val-required="Remember me? required" id="RememberMe" type="checkbox"
                                    v-model="loginForm.RememberMe"><input name="RememberMe" type="hidden" v-model="loginForm.RememberMe">
                                <label class="custom-control-label" for="RememberMe">Remember me?</label>
                            </div>
                        </div>
                        <div class="loginSignUpButtons">

                            <button type="submit" class="btnClose btn-primary">Sign In</button>

                            <div class="forgottenPassword"><a
                                    href="/account/forgottenpassword">Forgotten
                                    Password?</a></div>
                        </div>
                    </form>
                </div>


                <!-- STOR-2338 GW one of the below MUST BE ENABLED-->
                <!-- registration container -->
                <div class="myAccountSection newRegistration">

                    <form action="/account/register" method="post" novalidate="novalidate"><input name="IsFromCheckout"
                            data-val="true" data-val-required="IsFromCheckout required" id="IsFromCheckout"
                            type="hidden" value="False"><input name="HasBasket" data-val="true"
                            data-val-required="HasBasket required" id="HasBasket" type="hidden" value="False"><input
                            name="__RequestVerificationToken" type="hidden"
                            value="VZAUjglWlodpG6TvL72idtDcK0CHPFn_47Ks6SGV-xPx0-YpSdzLQgxqGpTvRF5UiXItvi0E1fKGz4b4XiM6sd0kaqU1">
                        <h4>New Customers</h4>
                        <div class="guestRegistration">
                            <p class="customerRegistrationText subTitle">

                            </p>

                            <div class="loginGuestButtons">

                                <button type="submit" class="btnClose btn-primary">Sign Up</button>

                            </div>
                        </div>
                    </form>
                </div>

                <!-- @registration container -->

                <!-- @returning customers container -->


                <!-- <div id="noCookies" style="display:none;">
                    <h2>Cookies must be enabled in order to log in</h2>
                    <h3><a href="/CookiePolicy" class="button">View our Cookie Policy</a></h3>
                </div>
                <script src="/public/javascript/CookiesEnabled.js?v=639002922315550975"></script> -->

                <!-- <script>
                            if (CookiesEnabled.AreCookiesEnabled() == false) {
                                document.getElementById("loginForm").style.display = "none";
                                document.getElementById("noCookies").style.display = "";
                            }
                        </script> -->

            </div>
        </div>
    </div>
</template>