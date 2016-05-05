Ext.define('TutorialApp.view.order.OrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    onLogoutButton: function(){
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
    onAddNewTicket: function(button, e, options){
        var user_id = localStorage.getItem('currentUser');
        var formPanel = button.up('form'),
            //user_id = formPanel.down('textfield[name=user_id]').getValue(),
            daily_transaction_product_id = formPanel.down('textfield[name=product_id]').getValue(),
            note = formPanel.down('textfield[name=note]').getValue(),
            quantity = formPanel.down('textfield[name=quantity]').getValue();

        var id = formPanel.down('hiddenfield').getValue();
        var url;

        if(id){
            url = 'http://localhost/giochaAPI/public/api/orders?token=' + localStorage.getItem('Bearer');
            method = 'PUT';
        } else {
            method = 'POST';
            url = 'http://localhost/giochaAPI/public/api/orders?token=' + localStorage.getItem('Bearer');
        }

        if (formPanel.getForm().isValid()) {
                Ext.Ajax.useDefaultXhrHeader = false;

                Ext.Ajax.request({
                    cors: true,
                    useDefaultXhrHeader: false,
                    url: url,
                    method: 'POST',
                    params: {
                        note: note,
                        status: '2',
                        user_id: user_id,
                        product_id: daily_transaction_product_id,
                        quantity: quantity                   
                    },
                    failure: function(conn, response, options, eOpts) {
                        Ext.Msg.show({
                            title:'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts){
                        var result = Ext.JSON.decode(conn.responseText, true);
                        Ext.getCmp('listOrder').getStore().load();
                        if (!result){ // #2
                            result = {};
                            result.msg = conn.responseText;
                        }
                        if (result.code == 200) { // #3
                           var addModal = button.up('add-new-ticket');
                           addModal.hide();
                        } else {
                            Ext.Msg.show({
                                title:'Fail!',
                                msg: result.message, // #6
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            console.log(result);
                        }
                    }
                });
            }
    },
    onEditTicket: function(grid, rowIndex, colIndex){
        var rec = grid.getStore().getAt(rowIndex);

        var editModal = Ext.create('News.view.backend.AddNewCategoryForm');
        var form = editModal.down('form');

        form.loadRecord(rec);
        editModal.show();
        
    },
    onDeleteTicket: function(grid, rowIndex, colIndex){
        var rec = grid.getStore().getAt(rowIndex);
        var categoryId = rec.get('id');

        Ext.MessageBox.confirm('Delete', 'Are you sure to delete ticket ' + rec.get('name') + '?', function(btn){
           if(btn === 'yes'){
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
                    failure: function(conn, response, options, eOpts) {
                        Ext.Msg.show({
                            title:'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts){
                        var result = Ext.JSON.decode(conn.responseText, true);

                        if (!result){ 
                            result = {};
                            result.msg = conn.responseText;
                        }

                        if (result.status_code != 200) { 
                            Ext.Msg.show({
                                title:'Fail!',
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