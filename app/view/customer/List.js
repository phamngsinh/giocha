/**
 * View customerList.
 */
Ext.define('TutorialApp.view.customer.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerList',
    id: 'listCustomer',
    requires: [
        'TutorialApp.store.Customer'
    ],
    title: 'Khách hàng',
    store: {
        type: 'customer'
    },
    columns: [
        {text: 'ID', dataIndex: 'id', flex: 1},
        {text: 'Note', dataIndex: 'note', flex: 1},
        {text: 'Status', dataIndex: 'status', flex: 1},
        {text: 'Customer', dataIndex: 'user_id', flex: 1},
        {text: 'Product', dataIndex: 'daily_transaction_product_id', flex: 1}
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
                        var addModal = Ext.create('TutorialApp.view.customer.Form');
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