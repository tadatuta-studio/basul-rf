block('page').mod('slug', 'index').content()(function () {
    return [
        {
            block: 'header',
            mods : { slug : 'index' }
        },
        {
            block: 'slide'
        },
        {
            block: 'features'
        },
        {
            block: 'footer'
        },
        {
            block: 'metrika'
        }
    ];
});
