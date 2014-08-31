Ext.define('TP.view.UserForm', {
    extend: 'Ext.form.Panel',

    xtype: 'userform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.TextArea'
    ],

    config: {
        modal: true,
        centered: true,
        width: 600,
        height: 440,
        hideOnMaskTap: true,
        items: [
            {
                xtype: 'fieldset',
                title: 'User Info',
                instructions: 'Please enter the information above.',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
                    {
                        xtype         : 'textfield',
                        name          : 'name',
                        label         : 'Name',
                        placeHolder   : 'Tom Roy',
                        autoCapitalize: true,
                        required      : true,
                        clearIcon     : true
                    },
                    {
                        xtype      : 'emailfield',
                        name       : 'email',
                        label      : 'Email',
                        placeHolder: 'me@sencha.com',
                        clearIcon  : true
                    },
                    {
                        xtype      : 'spinnerfield',
                        name       : 'age',
                        label      : 'Age',
                        minValue   : 0,
                        maxValue   : 100,
                        stepValue  : 1,
                        cycle      : true
                    },
                    {
                        xtype      : 'urlfield',
                        name       : 'avatar',
                        label      : 'Avatar',
                        placeHolder: 'http://sencha.com/image.jpg',
                        clearIcon  : true
                    },
                    {
                        xtype: 'textareafield',
                        name : 'bio',
                        label: 'Bio'
                    }
                ]
            }
        ]
    }
});