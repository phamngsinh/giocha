
Ext.define('TutorialApp.view.customer.editCustomerForm', {
    extend: 'Ext.window.Window',
    xtype: 'editCustomerForm',
    requires: [
        'Ext.form.Panel'
    ],
    controller: 'customer',
    bodyPadding: 10,
    title: 'Sửa khách hàng',
    modal: true,
    items: {
        xtype: 'form',
        reference: 'editCustomerForm',
        items: [{
                xtype: 'textfield',
                name: 'customerName',
                fieldLabel: 'Tên Khách Hàng',
                allowBlank: false,
                msgTarget: 'under',
                bind: '{row.name}'
            }, {
                xtype: 'textfield',
                name: 'customerEmail',
                fieldLabel: 'Email',
                msgTarget: 'under',
                bind: '{row.email}'
            }, {
                xtype: 'textfield',
                name: 'customerPassword',
                fieldLabel: 'Password',
                inputType: 'password',
                msgTarget: 'under',
                bind: '{row.password}'
            },
            {
                xtype: 'hiddenfield',
                name: 'id',
                bind: '{row.id}'
            }],
        buttons: [
            {
                text: 'Save',
                formBind: true,
                name: 'save',
                listeners: {
                    click: 'updateCustomer'
                }
            }]
    },
    listeners: {
        hide: function () {
            //var store = Ext.create('News.store.Categories');
            //Ext.getCmp('categorieslist').getView().bindStore(store);
        }
    }
});