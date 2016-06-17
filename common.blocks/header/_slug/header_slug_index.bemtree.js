block('header').mod('slug', 'index').content()(function() {
    return [
        {
            block: this.block,
            elem: 'contacts',
            elemMods: { slug: 'index' },
            content: [
                '+7 978 011 99 11'
            ].map(para => ({ elem: 'line', content: para }))
        },
        {
            block: 'logo',
            mods : { dark : true },
            url: this.data.relPathToRoot,
            content: [
                {
                    elem: 'name',
                    content: 'Емельян Басюл'
                },
                {
                    elem: 'position',
                    content: 'арбитражный управляющий'
                }
            ]
        },
        { block: 'nav' }
    ];
});
