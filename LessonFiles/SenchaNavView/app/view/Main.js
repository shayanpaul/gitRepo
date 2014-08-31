Ext.define('TP.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',

    config: {
        id: 'nav-view',
        fullscreen: true,
        items: [
        	{
        		title: 'Home',
        		layout: 'vbox',
        		items: [
        			{
        				html:'our content'
        			},
        			{
        				xtype: 'button',
        				text: 'add view',
                        margin: 10,
                        handler: function(){
                        	var view = Ext.getCmp('nav-view');
                            view.push({
                                title: 'New view\'s title',
                                items: [
                                    {
                                        xtype: 'button',
                                        text: 'pop the view',
                                        margin: 10,
                                        handler: function(self, e){
                                            var view = Ext.getCmp('nav-view');
                                            view.pop();
                                        }
                                    }
                                ]
                            });
                        }
        			}
        		]
        	}
        ]
    }
});
