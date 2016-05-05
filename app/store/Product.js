Ext.define('TutorialApp.store.Product', {
    extend: 'Ext.data.Store',
    requires: [
        'TutorialApp.model.Product'
    ],
    alias: 'store.Product',
    model: "TutorialApp.model.Product",
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost/giochaAPI/public/api/products?token='+localStorage.getItem('Bearer'),
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});