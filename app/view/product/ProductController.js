Ext.define('TutorialApp.view.product.ProductController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ProductCTL',
    requires: [      
        'TutorialApp.view.product.editProductForm'    ],
    addNewProductAction: function (button, e, options) {
        var _formPanel = button.up('form');
        var _token = localStorage.getItem('Bearer');
        var _currentID = localStorage.getItem('currentUser');
        var _url = 'http://localhost/giochaAPI/public/api/products?token='+ _token;
        var _product = this.lookupReference('addProductForm').getValues();



        var _params = {
            name: _product.name,
            description: _product.description,
            price: _product.price,
            creator: _currentID
        };

        if (_formPanel.getForm().isValid()) {
            Ext.Ajax.useDefaultXhrHeader = false;
            Ext.Ajax.request({
                cors: true,
                useDefaultXhrHeader: false,
                url: _url,
                method: 'POST',
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
                        var addModal = button.up('addProductForm');
                        addModal.hide();
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
                }
            });
        }
    },
    editProductAction: function (button, e, options) {
        var _formPanel = button.up('form');
        var _token = localStorage.getItem('Bearer');
        var _product = this.lookupReference('editProductForm').getValues();
        var _url = 'http://localhost/giochaAPI/public/api/products/' + _product.id + '?token='+ _token;


        var _params = {
            name: _product.name,
            description: _product.description,
            price: _product.price
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
                        var addModal = button.up('editProductForm');
                        addModal.hide();
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
                }
            });
        }
    },
    onEditProductClick: function (row) {
        var view = this.getView();
        var _data = row.getWidgetRecord();

        var editModal = Ext.create('TutorialApp.view.product.editProductForm', {
            viewModel: {
                data: {
                    row: _data
                }
            }
        });
        editModal.show();

        //this.dialog = view.add({
        //    xtype: 'editProductForm',
        //    viewModel: {
        //        links: {
        //            product: _data
        //        }
        //    },
        //    session: true
        //});
        //
        //this.dialog.show();
 
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