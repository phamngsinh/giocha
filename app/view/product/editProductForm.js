Ext.define('TutorialApp.view.product.editProductForm', {
    extend: 'Ext.window.Window',
    xtype: 'editProduct',

    requires: [
        'Ext.form.Panel',
        'TutorialApp.view.product.ProductController'
    ],

    controller: 'ProductCTL',
    bodyPadding: 10,
    title: 'Edit product',
    modal: true,
    items: {
        xtype: 'form',
        reference: 'editProductForm',
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Tên sản phẩm:',
            allowBlank: false,
            msgTarget: 'under',
            bind: '{name}'
        },
        {
            xtype: 'textfield',
            name: 'price',
            fieldLabel: 'Giá',
            msgTarget: 'under',
            bind: '{price}'
        },
        {
            xtype: 'textfield',
            name: 'description',
            fieldLabel: 'Mô tả',
            msgTarget: 'under',
            bind: '{description}'
        },{
                xtype: 'hiddenfield',
                name: 'id',
                bind: '{id}'
            }],
        buttons: [
            {
                text: 'Sửa',
                formBind: true,
                name: 'save',
                listeners: {
                    click: 'addNewProductAction'
                }
            }]
    },
    listeners: {}
});