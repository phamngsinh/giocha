Ext.define('TutorialApp.view.customer.CustomerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customer',
    onLogoutButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('loggedIn');


        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'app-main'
        });

        this.redirectTo('');
    },
    onAddNewCat: function (button, e, options) {
        var _token = localStorage.getItem('Bearer');
        var formPanel = button.up('form'),
                customerName = formPanel.down('textfield[name=customerName]').getValue(),
                customerEmail = formPanel.down('textfield[name=customerEmail]').getValue();
                customerPassword = formPanel.down('textfield[name=customerPassword]').getValue();

        var id = formPanel.down('hiddenfield').getValue();
        var url;

        if (id) {
            url = 'http://news.api/api/edit-category';
            // url = 'http://localhost:8080/newsApi/public/api/edit-category';
            method = 'PUT';
        } else {
            method = 'POST';
            url = Global.API + '/users?token='+ _token;
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
                    if (result.status_code == 200) { // #3
                        var addModal = button.up('add-new-category');
                        addModal.hide();
                    } else {
                        Ext.Msg.show({
                            title: 'SUCCESS!',
                            msg: result.message, // #6
                            icon: Ext.Msg.SUCCESS,
                            buttons: Ext.Msg.OK
                        });
                        addModal.hide();
                        console.log(result);
                    }
                }
            });
        }
    },
    onEditCat: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);

        var editModal = Ext.create('News.view.backend.AddNewCategoryForm');
        var form = editModal.down('form');

        form.loadRecord(rec);
        editModal.show();

    },
    onDeleteCat: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var categoryId = rec.get('id');

        Ext.MessageBox.confirm('Delete', 'Are you sure to delete category ' + rec.get('name') + '?', function (btn) {
            if (btn === 'yes') {
                Ext.Ajax.useDefaultXhrHeader = false;

                Ext.Ajax.request({
                    cors: true,
                    useDefaultXhrHeader: false,
                    url: 'http://news.api/api/delete-category',
                    // url: 'http://localhost:8080/newsApi/public/api/delete-category',
                    method: 'POST',
                    params: {
                        id: categoryId
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

                        if (!result) {
                            result = {};
                            result.msg = conn.responseText;
                        }

                        if (result.status_code != 200) {
                            Ext.Msg.show({
                                title: 'Fail!',
                                msg: result.msg,
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }
                    }
                });

                grid.getStore().remove(rec);
            }
        });
    }
});