//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'SenchaViews': 'app'
});
//</debug>

Ext.application({
    name: 'TP',

    views: ['Main'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('TP.view.Main'));
    }
});
