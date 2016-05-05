
var states = Ext.create('TutorialApp.store.Product');

Ext.define('TutorialApp.view.order.Datbanh', {
    extend: 'Ext.window.Window',
    xtype: 'add-new-ticket',

    requires: [
        'Ext.form.Panel',
        'TutorialApp.view.order.OrderController',
        'TutorialApp.store.Product'
    ],

    controller: 'order',
    bodyPadding: 10,
    title: 'Add new ticket',
    modal: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'combobox',
            name: 'product_id',
            fieldLabel: 'Loại Bánh',
            store: states,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
        },
        {
            xtype: 'textfield',
            name: 'note',
            fieldLabel: 'Note',
            allowBlank: true,
            msgTarget: 'under'
        },
        {
            xtype: 'textfield',
            name: 'quantity',
            fieldLabel: 'Số Lượng',
            msgTarget: 'under'
        },
        {
            xtype: 'hiddenfield',
            name: 'id',
            bind: '{id}'
        }],
        buttons: [
        {
            text: 'Save',
            formBind: true,
            name: 'save',
            listeners: {
                click: 'onAddNewTicket'
            }
        }]
    },
    listeners:{
        hide:function(){
            var store = Ext.create('TutorialApp.store.order');
            Ext.getCmp('List').getView().bindStore(store);
        }
    }
});