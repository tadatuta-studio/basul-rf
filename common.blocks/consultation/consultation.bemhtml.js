block('consultation')(
    tag()('form'),
    attrs()(function () {
        return {
            action : 'https://formspree.io/your@email.com',
            method : 'POST'
        };
    }),
    content()(function () {

        var res = [
            {
                tag: 'h2',
                content: 'Консультация'
            },
            {
                tag: 'p',
                content: 'Оставьте заявку прямо сейчас и наш адвокат поможет найти решение вашей проблемы!'
            }
        ];

        var obj = {
            'name': 'Ваши имя и фамилия',
            'phone': 'Ваш телефон',
            'email': 'Адрес электропочты'
        };

        for (var item in obj) {
            res = res.concat({
                block : 'input',
                required : true,
                mods : { theme : 'islands', size : 'l' },
                mix : [ { block : 'consultation', elem : item } ],
                name : item,
                placeholder : obj[item]
            });
        }

        res = res.concat({
            block : 'textarea',
            mods : { theme : 'islands', size : 'l', width : 'available' },
            name : 'problem',
            placeholder : 'Опишите вашу проблему парой предложений'
        });

        return res = res.concat(
            {
                block : 'button',
                mods : { theme : 'islands', size : 'l', type : 'submit' },
                mix : [ { block : 'consultation', elem : 'confirm' } ],
                text : 'Получить консультацию'
            }
        );
    })
);
