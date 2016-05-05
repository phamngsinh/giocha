
Ext.define('TutorialApp.view.customer.Form', {
    extend: 'Ext.window.Window',
    xtype: 'addnewcustomer',
    requires: [
        'Ext.form.Panel',
        'TutorialApp.view.customer.CustomerController'
    ],
    controller: 'customer',
    bodyPadding: 10,
    title: 'Thêm khách hàng mới',
    modal: true,
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
                xtype: 'textfield',
                name: 'customerName',
                fieldLabel: 'Tên Khách Hàng',
                allowBlank: false,
                msgTarget: 'under',
                bind: '{customerName}'
            }, {
                xtype: 'textfield',
                name: 'customerEmail',
                fieldLabel: 'Email',
                msgTarget: 'under',
                bind: '{customerEmail}'
            },{
                xtype: 'textfield',
                name: 'customerPassword',
                fieldLabel: 'Password',
                inputType: 'password',
                msgTarget: 'under',
                bind: '{customerPassword}'
            },
            {
                xtype: 'hiddenfield',
                name: 'id',
                bind: '{id}'
            }],
        buttons: [
            {
                text: 'Save',
                formBind: true,
                name: 'save',
                listeners: {
                    click: 'onAddNewCat'
                }
            }]
    },
    listeners: {
        hide: function () {
            var store = Ext.create('News.store.Categories');
            Ext.getCmp('categorieslist').getView().bindStore(store);
        }
    }
});