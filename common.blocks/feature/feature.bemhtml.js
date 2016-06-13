block('feature').content()(function () {
    var list = this.ctx.list || [];
    return [
        {
            elem : 'title',
            tag : 'h2',
            content : this.ctx.title
        },
        {
            elem : 'list',
            tag : 'ul',
            content : list.map(function (item) {
                return {
                    block : 'list-item',
                    tag : 'li',
                    content : [
                        {
                            block : 'icon',
                            mix : [ { block : 'list-item', elem: 'icon' } ],
                            url : item.url
                        },
                        {
                            elem : 'desc',
                            tag : 'span',
                            content : item.desc
                        }
                    ]
                };
            })
        }
    ];
});
