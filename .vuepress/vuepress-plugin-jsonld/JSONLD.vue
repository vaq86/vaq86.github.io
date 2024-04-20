<template></template>

<script>
export default {
    created() {
        if (typeof this.$ssrContext !== "undefined") {
            this.$ssrContext.userHeadTags += `<script type='application/ld+json'>
            {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "${this.$page.title || this.$title}",
                "url": "${"https://vaq86.github.io" + this.$page.path}",
                "image": [
                    "https://vaq86.github.io/avatar.png"
                ],
                "datePublished": "${
                    (this.$page.frontmatter.date && new Date(this.$page.frontmatter.date).toISOString()) ||
                    (this.$page.lastUpdated && new Date(this.$page.lastUpdated).toISOString()) ||
                    new Date().toISOString()
                }",
                "dateModified": "${(this.$page.lastUpdated && new Date(this.$page.lastUpdated).toISOString()) || new Date().toISOString()}",
                "author": [{
                    "@type": "Person",
                    "name": "ChatGPT小站",
                    "url": "https://vaq86.github.io"
                }]
            }
            <\/script>`;
        }
    },
};
</script>
