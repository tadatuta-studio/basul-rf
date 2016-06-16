block('consultation')(
    tag()('form'),
    attrs()(function () {
        return {
            action : 'https://formspree.io/' + this.ctx.email,
            method : 'POST'
        };
    }),
    content()(function () {

        var fieldsToCaption = {
            'name' : 'Ваши имя и фамилия',
            'phone' : 'Ваш телефон',
            'email' : 'Адрес электропочты'
        };

        return [
            {
                tag : 'h2',
                content : 'Консультация'
            },
            {
                tag : 'p',
                content : 'Оставьте заявку прямо сейчас и наш адвокат поможет найти решение вашей проблемы!'
            },
            Object.keys(fieldsToCaption).map(function (field) {
                return {
                    block : 'input',
                    required : true,
                    mods : { theme : 'islands', size : 'l' },
                    mix : [ { block : 'consultation', elem : field } ],
                    name : field,
                    placeholder : fieldsToCaption[field]
                };
            }),
            {
                block : 'consultation',
                elem : 'problem',
                content : {
                    block : 'textarea',
                    mods : { theme : 'islands', size : 'l', width : 'available' },
                    name : 'problem',
                    placeholder : 'Опишите вашу проблему парой предложений'
                }
            },
            {
                block : 'consultation',
                elem : 'confirm',
                content : {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l', type : 'submit' },
                    text : 'Получить консультацию'
                }
            }
        ];
    })
);
