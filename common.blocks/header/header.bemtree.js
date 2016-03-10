block('header').content()(function() {
    return [
        {
            block: this.block,
            elem: 'contacts',
            content: [
                '+7 978 011 99 11',
                'bas-ev@mail.ru',
                'г. Ялта, ул. К. Маркса, 12, кв. 7'
            ].map(para => ({ elem: 'line', content: para }))
        },
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
