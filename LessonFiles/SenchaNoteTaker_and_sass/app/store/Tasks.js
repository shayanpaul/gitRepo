Ext.define('TP.store.Tasks', {
    extend: 'Ext.data.Store',

    config: {
        model: 'TP.model.Task',
        proxy: {
            type: 'localstorage',
            id: 'my-tasks',
            uniqueId: 'my-tasks'
        },
        autoLoad: true
    }
});