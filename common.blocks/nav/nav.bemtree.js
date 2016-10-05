block('nav').content()(function() {
    var data = this.data,
        pagesMap = data.pages.reduce(function(prev, page) {
            prev[page.url] = page;
            return prev;
        }, {});

    // {
    //     block: 'link',
    //     mix: { block: this.block, elem: 'item' },
    //     url: data.relPathToRoot,
    //     content: 'Главная'
    // }

    return ['about', 'news', /*'bankruptcy',*/ 'sit-submenu', 'submenu', 'contacts'].map(function(item) {
        if (item === 'sit-submenu') return {
            elem: 'item',
            elemMods: { [item]: true },
            content: [
                'Банкротство гражданина',
                {
                    elem: 'submenu',
                    content: [
                        'sit-supervision',
                        'sit-proceedings',
                        'sit-agreement'
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
        };

        if (item === 'submenu') return {
            elem: 'item',
            elemMods: { [item]: true },
            content: [
                'Банкротство юридического лица',
                {
                    elem: 'submenu',
                    content: [
                        'supervision-procedure',
                        'financial-recovery',
                        'external-management',
                        'bankruptcy-proceedings',
                        'settlement-agreement'

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
        };

        return data.url === item ? {
            elem: 'item',
            elemMods: { active: true, [item]: true },
            content: pagesMap[item].title
        } : {
            block: 'link',
            mix: { block: this.block, elem: 'item', elemMods : { [item] : true } },
            url: data.relPathToRoot + item + '/',
            content: pagesMap[item].title
        };
    }, this);
});
