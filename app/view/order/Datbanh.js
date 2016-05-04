
Ext.define('TutorialApp.view.order.Datbanh', {
    extend: 'Ext.window.Window',
    xtype: 'add-new-category',

    requires: [
        'Ext.form.Panel',
        'TutorialApp.view.order.OrderController'
    ],

    controller: 'order',
    bodyPadding: 10,
    title: 'Add new category',
    modal: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'user_id',
            fieldLabel: 'Tên Khách Hàng',
            allowBlank: false,
            msgTarget: 'under',
            bind: '{user_id}'
        }, {
            xtype: 'textfield',
            name: 'daily_transaction_product_id',
            fieldLabel: 'Loại Bánh',
            msgTarget: 'under',
            bind: '{daily_transaction_product_id}'
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
                click: 'onAddNewCat'
            }
        }]
    },
   /* listeners:{
        hide:function(){
            var store = Ext.create('News.store.Categories');
            Ext.getCmp('categorieslist').getView().bindStore(store);
        }
    }*/
});