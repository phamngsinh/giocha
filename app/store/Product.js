Ext.define('TutorialApp.store.Product', {
    extend: 'Ext.data.Store',
    requires: [
        'TutorialApp.model.Product'
    ],
    alias: 'store.product',
    model: "TutorialApp.model.Product",
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost/giochaAPI/public/api/products',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }

});