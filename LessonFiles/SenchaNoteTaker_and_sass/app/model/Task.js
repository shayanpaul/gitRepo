Ext.define('TP.model.Task', {
    extend: 'Ext.data.Model',

    config: {
    	identifier: 'uuid',
        fields: [
            {name: 'label', type: 'string'},
            {name: 'done', type: 'boolean', defaultValue: false}
        ]
    }
});