Ext.define('TP.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: ['Ext.MessageBox', 'Ext.ActionSheet', 'Ext.picker.Picker'],

    config: {
        items:[
        	{
        		xtype: 'button',
        		text: 'click me',
        		handler: function(){
        			//Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);

        			/*Ext.Msg.prompt("Welcome!", "What's your first name?", function (buttonId, value) {
				        alert("Button Id: " + buttonId + "\nValue: " + value);
				    });*/

					/*Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?",  function (buttonId) {
				        alert("Button Id: " + buttonId);
				    });*/

					/*var items = [],
                    items = [
                        {
                            text: 'Delete draft',
                            ui: 'decline',
                            scope: this,
                            handler: function() {
                                this.actions.hide();
                            }
                        },
                        {
                            text: 'Save draft'
                        },
                        {
                            text: 'Cancel'
                        }
                    ];
					
                    this.actions = Ext.Viewport.add({
                        xtype: 'actionsheet',
                        items: items
                    });*/


					/*
					this.picker = Ext.Viewport.add({
                        xtype: 'picker',
                        slots: [
                            {
                                title: 'Speed',
                                data : [
                                    {text: '50 KB/s', value: 50},
                                    {text: '100 KB/s', value: 100},
                                    {text: '200 KB/s', value: 200},
                                    {text: '300 KB/s', value: 300}
                                ]
                            },
                            {
                                title: 'Speed',
                                data : [
                                    {text: '50 KB/s', value: 50},
                                    {text: '100 KB/s', value: 100},
                                    {text: '200 KB/s', value: 200},
                                    {text: '300 KB/s', value: 300}
                                ]
                            },
                            {
                                title: 'Speed',
                                data : [
                                    {text: '50 KB/s', value: 50},
                                    {text: '100 KB/s', value: 100},
                                    {text: '200 KB/s', value: 200},
                                    {text: '300 KB/s', value: 300}
                                ]
                            }
                        ]
                    });
					*/

					this.overlay = Ext.Viewport.add({
                        xtype: 'container',
                        modal: true,
                        hideOnMaskTap: true,
                        hideAnimation: {
                            type: 'popOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        centered: true,
                        width: 400,
                        height: 400,
                        styleHtmlContent: true,
                        html: 'Here is our content.',
                        items: [
                            {
                                docked: 'top',
                                xtype: 'toolbar',
                                title: 'Overlay Title'
                            }
                        ],
                        scrollable: true
                    });


        		}
        	}
        ]
    }
});









