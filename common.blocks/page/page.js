modules.define('page', ['i-bem__dom', 'button', 'modal'], function(provide, BEMDOM, Button) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                // находим блок modal на своем элементе callback-modal
                var callbackModal = this.findBlockOn('callback-modal', 'modal');

                // при клике на кнопке на своем элементе callback показываем callbackModal
                Button.on(this.elem('callback'), 'click', function() {
                    callbackModal.setMod('visible');
                });
            }
        }
    }
}));

});
