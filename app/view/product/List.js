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
    listeners: {
        select: 'onItemSelected'
    }
}); 