Ext.define('TP.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.carousel.Carousel'
    ],
    config: {
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            flex: 1
        },
        items: [
	        {
	            xtype: 'carousel',
	            id: 'my-carousel',
	            items: [
		            {
		                html: 'Content 1',
		                style: 'background:#aaa',
		                items:[
		                	{
		                		xtype: 'titlebar',
		                		title: 'Titlebar'
		                	}
		                ]
		            },
		            {
		                html: 'Content 2',
		                style: 'background:#ccc'
		            },
		            {
		                html: 'Content 3',
		                style: 'background:#eee'
		            }
	            ]
	        }, 
	        {
	            xtype: 'carousel',
	            ui: 'light',
	            direction: 'vertical',
	            items: [
		            {
		                html: 'Content 1',
		                style: 'background:#666'
		            },
		            {
		                html: 'Content 2',
		                style: 'background:#333'
		            },
		            {
		                html: 'Content 3',
		                style: 'background:#444'
		            }
	            ]
	        }
        ]
    }
});
