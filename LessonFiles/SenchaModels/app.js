//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'SenchaLesson': 'app'
});
//</debug>

Ext.application({
    name: 'TP',

    views: ['Main'],

    models: ['User'],

    stores: ['Users'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('TP.view.Main'));

        /*var user = Ext.create('TP.model.User', {
            name : 'James Henry',
            age  : 24,
            phone: '555-555-5555',
            username: 'Admin'
        });*/

        Ext.getStore('Users').on('load', this.onStoreLoad, this);
    },

    onStoreLoad: function(self, records, success, operation)
    {
        /*var searchResults = self.queryBy(function(record, id){
            return record.get('gender') == "Male";
        })*/
        console.log(self);
    }
});












