modules.define('button', function (provide, Button) {

provide(Button.decl({ modName : 'callback', modVal : true }, {
    onSetMod: {
        'js': {
            'inited': function () {
                this.modal = this.findBlockOutside('page').findBlockInside('modal');
            }
        }
    },

    onClick: function () {
        this.modal.setMod('visible');
    }

}, {
    live: function () {
        this.liveBindTo('click', function () {
            this.onClick();
        })
    }
}));

});
