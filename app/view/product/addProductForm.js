
Ext.define('TutorialApp.view.order.addProductForm', {
    extend: 'Ext.window.Window',
    xtype: 'addProduct',

    requires: [
        'Ext.form.Panel',
        'TutorialApp.view.order.ProductController'
    ],

    controller: 'ProductCTL',
    bodyPadding: 10,
    title: 'Add new product',
    modal: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Product Name:',
            allowBlank: false,
            msgTarget: 'under',
            bind: '{name}'
        }, {
            xtype: 'textfield',
            name: 'description',
            fieldLabel: 'Description',
            msgTarget: 'under',
            bind: '{description}'
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
            name: 'Save',
            listeners: {
                click: 'addNewProductAction'
            }
        }]
    },
    listeners:{
        
    }
});