Ext.define('TutorialApp.view.product.ProductController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ProductCTL',
    requires: [      
        'TutorialApp.view.product.editProductForm'    ],
    /**
     *
     * @param button
     * @param e
     * @param options
     */
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
                /**
                 *
                 * @param conn
                 * @param response
                 * @param options
                 * @param eOpts
                 */
                failure: function (conn, response, options, eOpts) {
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: conn.responseText,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                },
                /**
                 *
                 * @param conn
                 * @param response
                 * @param options
                 * @param eOpts
                 */
                success: function (conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText, true);
                    Ext.getCmp('listProduct').getStore().load();
                    if (!result) { // #2
                        result = {};
                        result.msg = conn.responseText;
                    }
                    if (result.code == 200) {
                        var addModal = button.up('addProductForm');
                        addModal.hide();
                        Ext.getCmp('listProduct').getStore().load();

                        Ext.Msg.show({
                            title: 'Successfully',
                            msg: 'Product is added successfully', // #6
                            icon: Ext.Msg.SUCCESS,
                            buttons: Ext.Msg.OK
                        });
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
    /**
     *
     * @param button
     * @param e
     * @param options
     */
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
                /**
                 *
                 * @param conn
                 * @param response
                 * @param options
                 * @param eOpts
                 */
                failure: function (conn, response, options, eOpts) {
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: conn.responseText,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                },
                /**
                 *
                 * @param conn
                 * @param response
                 * @param options
                 * @param eOpts
                 */
                success: function (conn, response, options, eOpts) {
                    var result = Ext.JSON.decode(conn.responseText, true);

                    if (!result) {
                        result = {};
                        result.msg = conn.responseText;
                    }

                    /**
                     * Case success
                     */
                    if (result.code == 200) {
                        Ext.getCmp('listProduct').getStore().load();
                        var addModal = button.up('editProductForm');
                        addModal.hide();
                        Ext.Msg.show({
                            title: 'Successfully',
                            msg: 'Product is updated successfully', // #6
                            icon: Ext.Msg.SUCCESS,
                            buttons: Ext.Msg.OK
                        });

                    } else {
                        Ext.Msg.show({
                            title: 'Fail!',
                            msg: result.message,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    }
                }
            });
        }
    },

    /**
     *
     * @param row
     */
    onEditProductClick: function (row) {
        var _data = row.getWidgetRecord();
        var editModal = Ext.create('TutorialApp.view.product.editProductForm', {
            viewModel: {
                data: {
                    row: _data
                }
            }
        });
        editModal.show();
    },

    /**
     *
     * @param row
     */
    onDeleteProductClick: function (row) {
        var _data = row.getWidgetRecord().data;
        var _token = localStorage.getItem('Bearer');
        var _url = 'http://localhost/giochaAPI/public/api/products/' + _data.id + '?token='+ _token;

        var _productId = _data.id;
        Ext.MessageBox.confirm('Xóa sản phẩm', 'Bạn có chắc chắn xóa sản phẩm ' + _data.name + '?', function (btn) {
            if (btn === 'yes') {
                Ext.Ajax.useDefaultXhrHeader = false;

                Ext.Ajax.request({
                    cors: true,
                    useDefaultXhrHeader: false,
                    url: _url,
                    method: 'DELETE',
                    params: {
                        id: _productId
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

                        Ext.getCmp('listProduct').getStore().load();

                        if (!result) {
                            result = {};
                            result.msg = conn.responseText;
                        }

                        if(result.code == 200){
                            Ext.Msg.show({
                                title: 'Delete product successfully',
                                msg: result.message,
                                icon: Ext.Msg.SUCCESS,
                                buttons: Ext.Msg.OK
                            });
                            //listProduct
                            Ext.getCmp('listProduct').getStore().load();
                        }

                        if (result.code != 200) {
                            Ext.Msg.show({
                                title: 'Fail!',
                                msg: result.message,
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }
                    }
                });
            }
        });
    }
});