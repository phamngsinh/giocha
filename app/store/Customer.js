Ext.define('TutorialApp.store.Customer', {
    extend: 'Ext.data.Store',
    alias: 'store.customer',
    fields: [
        'id', 'note', 'status', 'customer', 'daily_transaction_product_id',
    ],
    model: "TutorialApp.model.Customer",
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: Global.API + '/users',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});