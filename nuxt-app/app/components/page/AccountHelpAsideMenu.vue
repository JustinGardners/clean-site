<script setup>
import { links } from '~~/layers/alpine/src/components/accountNavLinks';

</script>
<template>
    <div class="leftNav" x-data="account">
        <div class="navSection">
            <div class="navSectionItem">
                <div class="adminNav" :style="{ '--items-length': links.length }">
                    <label for="accountInfo"><span>Account Help</span></label>
                    <input id="accountInfo" type="checkbox">
                    <div class="adminNav__wrapper">
                        <h5>Account Help</h5>
                        <AlpineFor
                        :data="{ links }"
                        items="links"
                        item="link"
                        item-key="link.text"
                        wrapper-element="ul"
                        >
                        <template #item class="tw:contents">
                            <li><a v-pre :href="link.href" x-text="link.text"></a></li>
                        </template>
                        </AlpineFor>                              
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>