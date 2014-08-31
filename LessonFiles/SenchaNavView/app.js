//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'TutsPlus': 'app'
});
//</debug>

Ext.application({
    //http://docs.sencha.com/touch/2-1/#!/api/Ext.app.Application
    name: 'TP',

    views: ['Main'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('TP.view.Main'));
    }

});
