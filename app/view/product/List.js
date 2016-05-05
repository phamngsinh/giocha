/**
 * View productList.
 */
Ext.define('TutorialApp.view.product.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'productList',
    id: 'listProduct',
    requires: [
        'TutorialApp.store.Product',
        'TutorialApp.view.product.addProductForm',
        'TutorialApp.view.product.ProductController'
    ],
    title: 'Món ăn',
    store: {
        type: 'Product'
    },
    controller: 'ProductCTL',
    columns: [
        {text: 'Id', dataIndex: 'id', width: 60},
        {text: 'Tên', dataIndex: 'name', flex: 1},
        {text: 'Giá', dataIndex: 'price', flex: 1},
        {text: 'Mô tả', dataIndex: 'description', flex: 1},
        {
            xtype: 'widgetcolumn',
            width: 90,
            widget: {
                xtype: 'button',
                text: 'Edit',
                handler: 'onEditProductClick'
            }
        },
        {
            xtype: 'widgetcolumn',
            width: 90,
            widget: {
                xtype: 'button',
                text: 'Delete',
                handler: 'onDeleteProductClick'
            }
        }
    ],
    dockedItems: [
    {
        xtype: 'toolbar',
        flex: 1,
        dock: 'bottom',
        items: [
            {
                xtype: 'button',
                text: 'Add',
                itemId: 'add',
                iconCls: 'x-fa fa-plus',
                handler: function() {
                    var addModal = Ext.create('TutorialApp.view.product.addProductForm');
                    addModal.show();
                }
            }
        ]
    }]
}); 