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
        {text: 'ID', dataIndex: 'id', width: 60},
        {
            text: 'Customer',
            renderer: function (value, meta, record, colIndex, rowIndex, store, view) {
                return record.data.users.name;
            },
            width: 200
        },
        {text: 'Note', dataIndex: 'note', flex: 1, width: 200},
        {text: 'Product',
            renderer: function (value, meta, record, colIndex, rowIndex, store, view) {
                return record.data.dailyTransactions.products[0].name;
            }
        },
        {text: 'Quantity',
            renderer: function (value, meta, record, colIndex, rowIndex, store, view) {
            return record.data.dailyTransactions.products[0].pivot.quantity;
        }}
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