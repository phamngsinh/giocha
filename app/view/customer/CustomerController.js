Ext.define('TutorialApp.view.customer.CustomerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customer',
    requires: [
        'TutorialApp.view.customer.editCustomerForm'
    ],
    onAddNewCat: function (button, e, options) {
        var _token = localStorage.getItem('Bearer');
        var formPanel = button.up('form'),
                customerName = formPanel.down('textfield[name=customerName]').getValue(),
                customerEmail = formPanel.down('textfield[name=customerEmail]').getValue();
        customerPassword = formPanel.down('textfield[name=customerPassword]').getValue();

        var id = formPanel.down('hiddenfield').getValue();
        var url = Global.API + '/users?token=' + _token;
        if (id) {
            method = 'PUT';
        } else {
            method = 'POST';
        }

        if (formPanel.getForm().isValid()) {
            Ext.Ajax.useDefaultXhrHeader = false;

            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,
                url: url,
                method: 'POST',
                params: {
                    id: id,
                    name: customerName,
                    email: customerEmail,
                    password: customerPassword,
                    role: 1
                },
                failure: function (conn, response, options, eOpts) {
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: conn.responseText,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                },
                success: function (conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText, true);
                    if (!result) { // #2
                        result = {};
                        result.msg = conn.responseText;
                    }
                    var addCustomerModal = button.up('addnewcustomer');
                    if (result.status_code == 200) { // #3
                    } else {
                        Ext.Msg.show({
                            title: 'SUCCESS!',
                            msg: result.message, // #6
                            icon: Ext.Msg.SUCCESS,
                            buttons: Ext.Msg.OK
                        });
                    }
                    Ext.getCmp('listCustomer').getStore().load();
                    addCustomerModal.hide();
                }
            });
        }
    },
    onEditCustomer: function (row) {
        var view = this.getView();
        var _data = row.getWidgetRecord();
        var editModal = Ext.create('TutorialApp.view.customer.editCustomerForm', {
            viewModel: {
                data: {
                    row: _data.data
                }
            }
        });
        editModal.show();

    },
    updateCustomer: function (button, e, options) {
        var _formPanel = button.up('form');
        var _token = localStorage.getItem('Bearer');
        var _customer = this.lookupReference('editCustomerForm').getValues();
        console.log(_customer);
        var _url = Global.API + '/customers/' + _customer.id + '?token=' + _token;


        var _params = {
            name: _customer.name,
            description: _customer.description,
            price: _customer.price
        };

        if (_formPanel.getForm().isValid()) {
            Ext.Ajax.useDefaultXhrHeader = false;
            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,
                url: _url,
                method: 'PUT',
                params: _params,
                failure: function (conn, response, options, eOpts) {
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: conn.responseText,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                },
                success: function (conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText, true);

                    if (!result) { // #2
                        result = {};
                        result.msg = conn.responseText;
                    }
                    if (result.status_code == 200) { // #3
                        //Ext.getCmp('productList').getView().refresh();
                        //Ext.getCmp('listProduct').getStore().load();
                    } else {
                        Ext.Msg.show({
                            title: 'Fail!',
                            msg: result.message, // #6
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    }
                    var addModal = button.up('editCustomerForm');
                    addModal.hide();
                    Ext.getCmp('listCustomer').getStore().load();
                }
            });
        }

    }
});