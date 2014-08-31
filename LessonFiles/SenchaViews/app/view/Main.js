Ext.define('TP.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        layout: 'vbox',

        items:[
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Welcome to Sencha Touch',
                items:[
                    {
                        xtype: 'button',
                        text: 'Set card 1',
                        listeners: {
                            tap: function(e){
                                var cardLayout = Ext.getCmp('card-layout');
                                cardLayout.setActiveItem(0);
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Set card 2',
                        listeners: {
                            tap: function(e){
                                var cardLayout = Ext.getCmp('card-layout');
                                cardLayout.setActiveItem(1);
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Set card 3',
                        listeners: {
                            tap: function(e){
                                var cardLayout = Ext.getCmp('card-layout');
                                cardLayout.setActiveItem(2);
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Set card 4',
                        listeners: {
                            tap: function(e){
                                var cardLayout = Ext.getCmp('card-layout');
                                cardLayout.setActiveItem(3);
                            }
                        }
                    }

                ]
            },
            {
                style: 'background:#999999',
                flex: 1
            },
            {
                style: 'background:#666666',
                flex: 3,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'container',
                        style: 'background:#333333',
                        flex: 1
                    },
                    {
                        style: 'background:#aaaaaa',
                        flex: 4,
                        layout: {type:'card',animation:{type:'slide'}},
                        id: 'card-layout',
                        items:[
                            {
                                html:'<strong>CARD ITEM 1</strong>'
                            },
                            {
                                html:'<strong>CARD ITEM 2</strong>'
                            },
                            {
                                html:'<strong>CARD ITEM 3</strong>'
                            },
                            {
                                html:'<strong>CARD ITEM 4</strong>'
                            }
                        ]
                    },
                    {
                        style: 'background:#333333',
                        flex: 1
                    }
                ]
            }
        ]
    }
});
