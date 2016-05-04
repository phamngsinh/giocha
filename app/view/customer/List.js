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
        {text: 'Name', dataIndex: 'name', flex: 1},
        {text: 'Email', dataIndex: 'email', flex: 1}
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