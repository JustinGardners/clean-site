<script setup lang="ts">
import storeLogo from '~~/assets/sprite/svg/storefront-logo.svg?raw';
</script>

<template>
    <header id="headerWrap">
        <div id="checkoutHeader">
            <div class="container-md">
                <div class="row">
                    <span class="checkout-header__secure">SECURE CHECKOUT</span>
                    <div id="storeLogoHeader" class="col-12">
                        <a href="/" v-html="storeLogo">

                        </a>
                    </div>
                    <div class="checkoutBreadcrumb">
                        <ul>
                            <li class="Welcome previous"><span>Sign-In</span>
                                <div>&nbsp;</div>
                            </li>
                            <li class="Delivery current"><a
                                    href="/checkout?TD=rJkuUgmbBfNNgeY%252fzzhok06UZwx97Kd1pgveILztoaxhkvg8aTFBvym3Jk6g4cxu5Tejap7LS1SNZFjZWzxnPlrj9uWzWNL5CFKDE2UXbF%252b9TcK%252beAvVRvp9%252fGRPr%252fsf1i7%252fnpfgtdxBM9d%252fMa3CXG76FJYFtp0DN5THI%252fd9uyKLuD5vWIwWsaosYV2E3q7bCeXei6u2SSRJnT6cSH9ehncNU%252bcj%252b4rwlk52biH5xk%252b%252fzJQtRoxO%252f1OEDwXi9hYcC%252fd%252fVgSJBZvoXsSE%252fRtjGirTabPrPvuQNx95yW9WqxPluK3So0tR2qHLtKYJBSeWwLQgH6aqMtM5JSYKY0nTciAZILFjybajy%252fXl3HCxxBk%253d"><span>Delivery</span></a>
                                <div>&nbsp;</div>
                            </li>
                            <li class="Payment"><span>Payment</span>
                                <div>&nbsp;</div>
                            </li>
                            <li class="Complete"><span>Complete</span>
                                <div>&nbsp;</div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </header>
</template>