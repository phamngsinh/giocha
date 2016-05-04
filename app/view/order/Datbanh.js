
Ext.define('TutorialApp.view.order.Datbanh', {
    extend: 'Ext.window.Window',
    xtype: 'add-new-ticket',

    requires: [
        'Ext.form.Panel',
        'TutorialApp.view.order.OrderController'
    ],

    controller: 'order',
    bodyPadding: 10,
    title: 'Add new ticket',
    modal: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'product_id',
            fieldLabel: 'Loại Bánh',
            msgTarget: 'under',
            bind: '{product_id}'
        },
        {
            xtype: 'textfield',
            name: 'note',
            fieldLabel: 'Note',
            allowBlank: true,
            msgTarget: 'under',
            bind: '{note}'
        },
        {
            xtype: 'textfield',
            name: 'quantity',
            fieldLabel: 'Số Lượng',
            msgTarget: 'under',
            bind: '{quantity}'
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