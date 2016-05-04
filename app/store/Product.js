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
        url: 'http://localhost/giochaAPI/public/api/products?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cDpcL1wvMTkyLjE2OC4xLjg3XC9naW9jaGFBUElcL3B1YmxpY1wvYXBpXC9hdXRoZW50aWNhdGUiLCJpYXQiOjE0NjIzNjM0NDcsImV4cCI6MTQ2MjM3MDY0NywibmJmIjoxNDYyMzYzNDQ3LCJqdGkiOiI3NzMxZjU0YWVlNTFhOTY0NjE0MDhlZmQ4MjY0YTllMyJ9.TvmPZ8UAt7rdsuZGrfARtZU6B3JTnh5rwQffysg41oM',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});