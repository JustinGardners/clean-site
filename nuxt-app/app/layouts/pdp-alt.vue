<template>
    <div id="outerWrap">
        <div id="wrap">
            <PageHeader />
            <main id="main-section">
                <div class="product-page" style="--layout: editorial">
                    <div id="body">
                        <slot />
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    </div>

</template>
