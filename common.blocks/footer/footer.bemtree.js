block('footer').content()(function() {
    return [
        {
            elem: 'left'
        },
        {
            elem: 'center',
            content: [
                {
                    tag: 'h3',
                    content: 'Карта сайта'
                },
                {
                    block: 'nav',
                    mods : { footer : true }
                }
            ]
        },
        {
            elem: 'right',
            content: [
                {
                    tag: 'h3',
                    content: 'Контактная информация'
                },
                ['+7 978 011 99 11',
                'bas-ev@mail.ru',
                'г. Ялта, ул. К. Маркса, 12, кв. 7',
                '© ' + new Date().getFullYear() + ' Емельян Басюл'].map(item => ({tag:'p', content: item})),
                {
                    block: 'copyright',
                    content: [
                        'Сайт разработан в ',
                        {
                            block: 'link',
                            mix : [ { block : 'footer', elem : 'link' } ],
                            url: 'http://tadatuta.com/',
                            content: 'tadatuta.com'
                        }
                    ]
                }
            ]
        }
    ];
});
