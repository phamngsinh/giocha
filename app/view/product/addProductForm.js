Ext.define('TutorialApp.view.product.addProductForm', {
    extend: 'Ext.window.Window',
    xtype: 'addProduct',

    requires: [
        'Ext.form.Panel',
        'TutorialApp.view.product.ProductController'
    ],

    controller: 'ProductCTL',
    bodyPadding: 10,
    title: 'Add new product',
    modal: true,

    items: {
        xtype: 'form',
        reference: 'addProductForm',
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Tên sản phẩm:',
            allowBlank: false,
            //id: 'product-name',
            msgTarget: 'under'
        },
        {
            xtype: 'textfield',
            name: 'price',
            fieldLabel: 'Giá',
            msgTarget: 'under'
        },
        {
            xtype: 'textfield',
            name: 'description',
            fieldLabel: 'Mô tả',
            msgTarget: 'under'
        }],
        buttons: [
            {
                text: 'Thêm',
                formBind: true,
                name: 'save',
                listeners: {
                    click: 'addNewProductAction'
                }
            }]
    },
    listeners: {}
});