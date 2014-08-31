Ext.define('TP.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    config: {
        layout: {
            type : 'vbox',
            pack : 'center',
            align: 'stretch'
        },
        defaults: {
            xtype: 'container',
            flex : 1,
            layout: {
                type : 'hbox',
                align: 'middle'
            },
            defaults: {
                xtype : 'button',
                flex  : 1,
                margin: 10
            }
        },
        items: [
            {
                items: [
                    {text: 'Normal'},
                    {ui: 'round', text: 'Round', badgeText: 'new'},
                    {ui: 'small', text: 'Small', badgeText: '4'},
                    {ui: 'back', text: 'Small'},
                    {ui: 'forward', text: 'Small'}
                ]
            },
            {
                items: [
                    {ui: 'decline', text: 'Decline'},
                    {ui: 'decline-round', text: 'Round'},
                    {ui: 'decline-small', text: 'Small'}
                ]
            },
            {
                items:[
                    {ui: 'confirm', text: 'Confirm'},
                    {ui: 'confirm-round', text: 'Round'},
                    {ui: 'confirm-small', text: 'Small'}
                ]
            },
            {
                items:[
                    {ui: 'action', text: 'Confirm'},
                    {ui: 'action-round', text: 'Round'},
                    {ui: 'action-small', text: 'Small'}
                ]
            }
        ]
    }
});
