block('feature').content()(function () {
    var list = this.ctx.list || [];
    return [
        {
            elem : 'title',
            content : this.ctx.title
        },
        {
            elem : 'list',
            content : list.map(function (item) {
                return {
                    block : 'list-item',
                    content : [
                        {
                            block : 'icon',
                            mix : [ { block : 'list-item', elem: 'icon' } ],
                            url : item.url
                        },
                        {
                            elem : 'desc',
                            content : item.desc
                        }
                    ]
                };
            })
        }
    ];
});

block('feature').elem('title')(
    tag()('h2')
);

block('feature').elem('list')(
    tag()('ul')
);
