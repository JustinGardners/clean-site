<script setup lang="ts">

definePageMeta({
    layout: 'account',
    props: {
        sidebar: true
    }    
});

const props = defineProps<{
    sidebar: boolean
}>()

</script>

<template>
    <PageAccountHelpAsideMenu v-if="props.sidebar" />
    <div class="myAccountWrap">
        <div class="myAccountContents">
            <div class="myAccountHeader">
                <h4 class="introHeading">Forgotten password</h4>
                <p>If you have forgotten your password, you can retrieve it with
                    this form. Enter your username and we will email you a link to reset your password.
                    If after a few minutes you have not received an email from us, please check your spam folder before
                    resubmitting.</p>
            </div>
            <div class="myAccountMain">
                <div class="form">

                    <form action="/account/forgottenpassword" method="post" novalidate="novalidate"><input
                            name="__RequestVerificationToken" type="hidden"
                            value="2-n4_7iDMDenoi0efGrgr8lxX0tO5NYFTz3D38Pied-pX-8nbNm7AGY3_y1Ax_m7w1BvTNQO6B2uORAMh7a6a1KEBFs1">
                        <div id="restPasswordDetails">
                            <div class="form-group">
                                <label for="Email" class="required">Email Address</label>
                                <input class="form-control" data-val="true"
                                    data-val-email="Please enter a valid email address"
                                    data-val-required="Email Address required" id="Email" maxlength="100" name="Email"
                                    type="text" value="">
                                <span class="field-validation-valid" data-valmsg-for="Email"
                                    data-valmsg-replace="true"></span>
                            </div>
                            <button type="submit" class="btn btn-primary submit">Reset password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>