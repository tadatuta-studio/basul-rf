block('nav').content()(function() {
    var data = this.data,
        pagesMap = data.pages.reduce(function(prev, page) {
            prev[page.url] = page;
            return prev;
        }, {});

    return [
        {
            block: 'link',
            mix: { block: this.block, elem: 'item' },
            url: data.relPathToRoot,
            content: 'Главная'
        },
        'bankruptcy' === data.url ? {
            elem: 'item',
            elemMods: { active: true },
            content: 'Банкротство гражданина'
        } : {
            block: 'link',
            mix: { block: this.block, elem: 'item' },
            url: data.relPathToRoot + 'bankruptcy/',
            content: 'Банкротство гражданина'
        },
        {
            elem: 'item',
            content: [
                'Банкротство юридического лица',
                {
                    elem: 'submenu',
                    content: [
                        'bankruptcy-proceedings',
                        'external-management',
                        'financial-recovery',
                        'settlement-agreement',
                        'supervision-procedure'
                    ].map(function(url) {
                        return url === data.url ? {
                            elem: 'submenu-item',
                            elemMods: { active: true },
                            content: pagesMap[url].title
                        } : {
                            block: 'link',
                            mix: { block: this.block, elem: 'submenu-item' },
                            url: data.relPathToRoot + url + '/',
                            content: pagesMap[url].title
                        };
                    }, this)
                }
            ]
        }
    ];
});
