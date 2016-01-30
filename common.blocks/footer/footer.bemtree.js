block('footer').content()(function() {
    return [
        {
            elem: 'left',
            content: '© ' + new Date().getFullYear() + ' Емельян Басюл'
        },
        {
            elem: 'center',
            content: {
                block: 'share'
            }
        },
        {
            elem: 'right',
            content: {
                block: 'copyright',
                content: [
                    'Сайт разработан в ',
                    {
                        block: 'link',
                        url: 'http://tadatuta.com/',
                        content: 'tadatuta.com'
                    }
                ]
            }
        }
    ];
});
