<template>
    <Block is="section" paddingY="lg" classes="flow">
        <Heading size="xl">Container Sizing - Reversed Column</Heading>
        <LayoutGrid columnGap="xl" :columns="2" type="grid">
            <CardsImageWithInfo :link="'/'" title="The Genius of Trees"
                subtitle="How trees mastered the elements and shaped the world" :classes="{
                    subtitle: 'tw:flow--1',
                    contentSlot: 'tw:flex-col flow tw:line-clamp-5 tw:@5xl:line-clamp-10 tw:max-w-prose'
                }" :config="{
            title: {
                as: 'h2',
                size: '2xl'
            },
            subtitle: {
                size: 'default'
            },
            directionLayout: {
                col: {
                    reverseOrder: true,
                    alignItems: 'center'
                }
            }
        }">
                <template #picture>
                    <img src="/a.jpg" alt="Test Picture" />
                </template>
                <template #content>
                    <p>Taking us on an awe-inspiring journey through deep history and across the globe, The Genius of
                        Trees
                        restores trees to their rightful position not as victims of our negligence but as ingenious,
                        stunningly
                        inventive agents in a grand ecological narrative.</p>
                    <p> Some have been using fire as a reproductive tool since prehistoric times. Others have gone to
                        extraordinary lengths to make sure their fruits reach large primates, who can spread their seeds
                        over vast
                        distances, while poisoning smaller and less useful mammals. Some can split solid rock and create
                        fertile
                        ground in barren landscapes, effectively building entire ecosystems from scratch.</p>
                    <p> For the first time, we witness the inventive and astonishing ways trees sculpt and even master
                        their
                        environment and understand the science of how they achieve these feats.</p>
                    <p>From oaks growing in Devon, England, and Amedi in Iraq to the laurel rainforests of the Canary
                        Islands,
                        metasequoias in California to fossil forests preserved from hundreds of millions of years ago,
                        we see how
                        trees not only farm the landscape in which they grow but also manipulate the elements, other
                        species and
                        even humans to achieve their ends. At once transporting and expert, this eye-opening,
                        mind-expanding
                        journey into the inner lives of nature's most powerful plant is a profoundly new and original
                        way of
                        understanding both the miracles trees perform and the glories of our natural world.</p>
                </template>
            </CardsImageWithInfo>
        </LayoutGrid>
    </Block>
</template>