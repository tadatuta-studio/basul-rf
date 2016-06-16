block('slide').content()(function () {
    return [
        {
            block : 'slide',
            elem : 'title',
            content : 'Банкротство в Крыму без посредников!'
        },
        {
            block : 'consultation',
            email : this.data.email,
            mix : { block : 'slide', elem : 'consultation' }
        }
    ];
});
