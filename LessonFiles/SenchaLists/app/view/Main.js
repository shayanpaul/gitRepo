Ext.define('TP.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.dataview.List'
    ],
    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'list',
                id: 'list-view',
                store: 'Users',
                itemTpl: new Ext.XTemplate(
                    '<tpl for=".">',
                        '<img src="{avatar}" style="width:70px; height:70px; float:left; margin: 0 10px 10px 0" />',
                        '<tpl if="age &gt; 40">',
                            '<p>Old {name}</p>',
                        '<tpl else>',
                            '<p>Young {name}</p>',
                        '</tpl>',
                        '<p>{bio:ellipsis(50)}</p>',
                        '<p>{[ values.name.toUpperCase() ]}</p>',
                    '</tpl>'
                ),
                flex: 1,
                grouped: true,
        		onItemDisclosure: function(record,index)
        		{
        			alert('Name: ' + record.get('name'));
        		}
            }
        ]
    }
});