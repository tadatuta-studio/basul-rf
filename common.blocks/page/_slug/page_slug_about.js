modules.define('about', ['i-bem__dom', 'info-modal'], function(provide, BEMDOM, InfoModal) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('preview', 'click', function(e) {
            e.preventDefault();
            InfoModal.show('<img src="' + e.target.src.replace('-preview', '') + '">');
        });
    }
}));

});
