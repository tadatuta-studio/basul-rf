block('header').mod('slug', 'index').content()(function() {
    return [
        {
            block: 'logo',
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
