Ext.define('TutorialApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
//    init: function () {
//        var store = Ext.create('TutorialApp.store.Customer', {
//            autoLoad: true,
//            autoSync: true,
//            model: 'Customer',
//            storeId: 'customer',
//            proxy: {
//                type: 'rest',
//                api: {
//                    read: 'http://localhost/giochaAPI/public/api/users',
//                },
//                headers: {
//                    'Authorization': 'Bearer ' + localStorage.getItem('Bearer')
//                },
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            },
//            listeners: {
//                write: function (store, operation) {
//                    var record = operation.getRecords()[0],
//                            name = Ext.String.capitalize(operation.action),
//                            verb;
//
//
//                    if (name == 'Destroy') {
//                        verb = 'Destroyed';
//                    } else {
//                        verb = name + 'd';
//                    }
//                    Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));
//
//                }
//            }
//        });
//    }
});