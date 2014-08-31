Ext.define('TP.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'my-tabs',
    config: {
    	activeItem: 2,
    	tabBar: {
    		ui: 'light',
            layout: {
                pack : 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        items: [
            {
                title: 'Tab 1',
                html : 'Tab Panel 1',
                iconCls: 'home',
                badgeText: '4'
            },
            {
                title: 'Tab 2',
                html : 'A TabPanel 2',
                iconCls: 'organize',
                badgeText: 'Long text in this'
            },
            {
                title: 'Tab 3',
                html : 'Tab Panel 3',
                iconCls: 'favorites'
            }
        ]
    }
});
