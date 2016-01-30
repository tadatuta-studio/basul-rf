modules.define('info-modal', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                if (this.__self.getModal()) return;

                var self = this.__self;

                self._modal = this.findBlockInside('modal')
                    .bindTo('click', function() {
                        self.hide();
                    });
            }
        }
    }
}, {
    show: function(content) {
        this.getModal()
            .setContent(content)
            .setMod('visible');

        return this;
    },

    hide: function() {
        this.getModal().delMod('visible');

        return this;
    },
    toggle: function() {
        this.getModal().toggleMod('visible');

        return this;
    },
    getModal: function() {
        return this._modal;
    }
}));

});
