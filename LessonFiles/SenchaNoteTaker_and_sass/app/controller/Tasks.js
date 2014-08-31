Ext.define('TP.controller.Tasks', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.data.proxy.LocalStorage',
        'Ext.MessageBox'
    ],
    config: {

        stores: ['Tasks'],

        models: ['Task'],

        refs: {
            taskList: 'list',
            addButton: '#add-button'
        },
        control: {
            taskList: {
                itemtap: 'onItemTap'
            },
            addButton: {
                tap: 'onAddButtonTap'
            }
        }
    },

    onItemTap: function(self, index, target, record, e)
    {
        var tasksStore = Ext.getStore('Tasks');
        if(record.get('done')){
            tasksStore.remove(record);
            tasksStore.sync();
        } else {
            record.set('done', true);
            tasksStore.sync();
        }
    },

    onAddButtonTap: function(self, e){
        Ext.Msg.prompt(
            'New Note',
            'What do you need to do?',
            this.addNewNote
        );
    },

    addNewNote: function(buttonId, value)
    {
        var task = Ext.create('TP.model.Task', {
            label: value
        });

        var tasksStore = Ext.getStore('Tasks');
        tasksStore.add(task);
        tasksStore.sync();
    }


});






