block('page').content()(function() {
    return [
        {
            block: 'header'
        },
        {
            block: 'content'
        },
        {
            block : 'modal',
            mix: { block: 'page', elem: 'callback-modal' },
            mods : { theme : 'islands', autoclosable : true },
            content : {
                block : 'consultation',
                email : this.data.email
            }
        },
        {
            block: 'footer'
        },
        {
            block: 'metrika'
        }
    ];
});
