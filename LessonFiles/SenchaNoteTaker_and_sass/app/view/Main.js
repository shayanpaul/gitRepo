Ext.define('TP.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List'
    ],
    config: {
        layout: 'vbox',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Note Taker',

                items: [
                    {
                        iconCls: 'cloud_black',
                        iconMask: true,
                        align: 'right',
                        id: 'add-button'
                    }
                ]
            },
            {
                xtype: 'list',
                store: 'Tasks',
                emptyText: 'There are no todo tasks. Go create one.',
                itemTpl: '<tpl for=".">\
                            <div class="<tpl if="done">is-done</tpl>">\
                                {label}\
                            </div>\
                          </tpl>',
                flex: 1
            }
        ]
    }
});
