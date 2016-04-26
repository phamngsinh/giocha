/**
 * View productList.
 */
Ext.define('TutorialApp.view.product.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'productList',
    id: 'listProduct',
    requires: [
        'TutorialApp.store.Product'
    ],
    title: 'Món ăn',
    store: {
        type: 'product'
    },
    columns: [
        {text: 'Tên', dataIndex: 'name', flex: 1},
        {text: 'Giá', dataIndex: 'price', flex: 1},
        {text: 'Mô tả', dataIndex: 'description', flex: 1}
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
                    var addModal = Ext.create('TutorialApp.view.order.addProductForm');
                    addModal.show();
                }
            }
        ]
    }]
}); 