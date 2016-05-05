/**
 * View customerList.
 */
Ext.define('TutorialApp.view.customer.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerList',
    id: 'listCustomer',
    requires: [
        'TutorialApp.store.Customer',
        'TutorialApp.view.customer.CustomerController',
        'TutorialApp.view.customer.editCustomerForm'
    ],
    title: 'Khách hàng',
    store: {
        type: 'customer'
    },
    controller: 'customer',
    columns: [
        {text: 'ID', dataIndex: 'id', flex: 1},
        {text: 'Name', dataIndex: 'name', flex: 1},
        {text: 'Email', dataIndex: 'email', flex: 1},
        {
            xtype: 'widgetcolumn',
            width: 90,
            widget: {
                xtype: 'button',
                text: 'Edit',
                handler: 'onEditCustomer'
            }
        },
        {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                    icon: 'http://cdn.onlinewebfonts.com/svg/img_416627.svg',
                    handler: function (grid, rowIndex, colIndex) {

                        var rec = grid.getStore().getAt(rowIndex);

                        Ext.MessageBox.confirm('Delete', 'Are you sure to delete ' + rec.get('name') + '?', function (btn) {
                            Ext.Ajax.request({
                                cors: true,
                                useDefaultXhrHeader: false,
                                url: Global.API + '/users/' + grid.getStore().getAt(rowIndex).get('id') + '&token=' + localStorage.getItem('Bearer'),
                                method: 'DELETE',
                                failure: function (conn, response, options, eOpts) {
                                    Ext.Msg.show({
                                        title: 'Error!',
                                        msg: conn.responseText,
                                        icon: Ext.Msg.ERROR,
                                        buttons: Ext.Msg.OK
                                    });
                                },
                                success: function (conn, response, options, eOpts) {
//                                Ext.getCmp('listCustomer').getView().refresh();
//                                Ext.getCmp('listCustomer').getStore().load();
                                    var result = Ext.JSON.decode(conn.responseText, true);

                                    if (!result) {
                                        result = {};
                                        result.msg = conn.responseText;
                                    }

                                    if (result.status_code != 200) {
                                        Ext.Msg.show({
                                            title: 'Success!',
                                            msg: 'Delete successfuly',
                                            icon: Ext.Msg.SUCCESS,
                                            buttons: Ext.Msg.OK
                                        });
                                    }
                                    Ext.getCmp('listCustomer').getStore().load();
                                }
                            });
                        });
                    }
                }]
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
                    handler: function () {
                        var addModal = Ext.create('TutorialApp.view.customer.Form');
                        addModal.show();
                    }
                }
            ]
        }
    ],
    onItemTap: function (list, index, target, record, e) {
        if (e.getTarget('div.edit-button')) {
            //handle edit button tap
        } else if (e.getTarget('div.delete-button')) {
            //handle delete button tap
        }
    },
    listeners: {
        select: 'onItemSelected'
    },
});