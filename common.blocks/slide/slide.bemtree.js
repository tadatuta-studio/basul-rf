block('slide').content()(function () {
    return [
        {
            block : 'slide',
            elem : 'title',
            tag : 'h1',
            content : 'Банкротство в Крыму без посредников!'
        },
        {
            block : 'consultation',
            mix : { block : 'slide', elem : 'consultation' }
        }
    ];
});
