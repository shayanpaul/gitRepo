Ext.define('TP.model.User', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id',  type: 'string'},
            {name: 'name',  type: 'string'},
            {name: 'email',  type: 'string'},
            {name: 'bio',  type: 'string'},
            {name: 'age',  type: 'integer'},
            {name: 'avatar',  type: 'string'}
        ]
    }
});