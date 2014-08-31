Ext.define('TP.model.User', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'name',     type: 'string'},
            {name: 'age',      type: 'int'},
            {name: 'phone',    type: 'string'},
            {name: 'gender',   type: 'string'},
            {name: 'username', type: 'string'},
            {name: 'alive',    type: 'boolean', defaultValue: true},
            {
                name: 'firstName',
                convert: function(value, record) {
                    var fullName  = record.get('name'),
                        splits    = fullName.split(" "),
                        firstName = splits[0];

                    return firstName;
                }
            }
		],
		validations: [
			{type: 'presence',  field: 'age'},
            {type: 'length',    field: 'name',     min: 2},
            {type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},
            {type: 'exclusion', field: 'username', list: ['Admin', 'Operator']},
            {type: 'format',    field: 'username', matcher: /^[A-Za-z0-9 _]*$/}
		],
	},

	ageString: function() {
        var age = this.get('age');
        if(age > 1){
            return age + " years old";
        }else{
            return age + " year old";
        }
    }



	
});