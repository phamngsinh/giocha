/**
 * View orderList.
 */
Ext.define('TutorialApp.view.order.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'orderList',
    id: 'listOrder',
    requires: [
        'TutorialApp.store.Order'
    ],
    title: 'Đặt Bánh Giò Chả',
    store: {
        type: 'order'
    },
    columns: [
        {text: 'ID', dataIndex: 'id', flex: 1},
        {text: 'Tên khách hàng', dataIndex: 'user_id', flex: 1},
        {text: 'Sản phẩm', dataIndex: 'product_id', flex: 1},
        {text: 'Thanh toán', dataIndex: 'quantity', flex: 1}
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
                    handler: function () {
                        var addModal = Ext.create('TutorialApp.view.order.Datbanh');
                        addModal.show();
                    }
                }
            ]
        }
    ],
    listeners: {
        select: 'onItemSelected'
    }

}); 