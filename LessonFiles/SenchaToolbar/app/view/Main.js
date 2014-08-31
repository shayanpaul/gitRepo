Ext.define('TP.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'Ext.SegmentedButton',
        'Ext.Toolbar'
    ],

    config: {
        html: 'Sencha ToolBar Tutorial!',
        items: [
        	{
        		xtype: 'toolbar',
                ui: 'dark',
                docked: 'top',
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                },
                items: [
                    {
                        text: 'Back',
                        ui: 'back'
                    },
                    {
                        text: 'Default',
                        badgeText: '2'
                    },
                    {
                        text: 'Round',
                        ui: 'round'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        allowDepress: true,
                        items: [
                            {
                                text: 'Option 1',
                                pressed: true
                            },
                            {
                                text: 'Option 2'
                            },
                            {
                                text: 'Option 3'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    },
                    { iconCls: 'action', iconMask: true, text: "action" },
                    { iconCls: 'add', iconMask: true },
                    { iconCls: 'compose', iconMask: true },
                    {
                        text: 'Action',
                        ui: 'action'
                    },
                    {
                        text: 'Forward',
                        ui: 'forward'
                    }
                ]
        	}
        ]
    }
});
