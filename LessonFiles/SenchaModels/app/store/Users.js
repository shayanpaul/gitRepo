Ext.define('TP.store.Users', {
    extend: 'Ext.data.Store',

    config: {
    	model: "TP.model.User",
	    proxy: {
	        type: "ajax",
	        url : "data/users.json",
	        reader: {
	            type: "json",
	            rootProperty: "users"
	        }
	    },
	    autoLoad: true
    }
});