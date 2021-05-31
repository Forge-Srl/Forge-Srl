module.exports = function (data) {
    if (!data.eleventyNavigation) {
        return ''
    }

    const breadcrumbsList = this.eleventyNavigationBreadcrumb(data.collections.all, data.eleventyNavigation.key)
    if (breadcrumbsList.length <= 0) {
        return ''
    }

    return `<script type="application/ld+json">{
         "@context": "https://schema.org",
         "@type": "BreadcrumbList",
         "itemListElement": [${breadcrumbsList
            .map((item, index) => `{"@type": "ListItem", "position": ${index + 1}, "name": "${item.title}", "item": "${data.forge.domain}${item.url}"}`)
            .concat(`{"@type": "ListItem", "position": ${breadcrumbsList.length}, "name": "${data.pageTitle}"}`)
            .join(',')}]
    }</script>
    <nav class="breadcrumbs"><ol>${breadcrumbsList
        .map(item => `<li><a href="${item.url}">${item.title}</a></li>`)
        .concat(`<li>${data.pageTitle}</li>`)
        .join('')}</ol></nav>`
}