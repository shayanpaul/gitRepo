//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'TutsPlus': 'app'
});
//</debug>

Ext.application({
    name: 'TP',

    views: ['Main'],

    models: ['User'],

    stores: ['Users'],

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('TP.view.Main'));
    }

});
