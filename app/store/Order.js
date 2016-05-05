// Ext.define('TutorialApp.store.Order', {
//     extend: 'Ext.data.Store',
//     alias: 'store.order',
//     fields: [
//         'id', 'note', 'status', 'user', 'daily_transaction_product_id'
//     ],
//     // model: "TutorialApp.model.Product", 
//     data: [
//             {id: '1', note: "note example", status: "pending", user_id: 'Viet Anh', daily_transaction_product_id: "Bánh mỳ kẹp chả"}, 
//             {id: '2', note: "note example", status: "pending", user_id: 'ABC', daily_transaction_product_id: "Bánh mỳ kẹp giò"}, 
//             {id: '3', note: "note example", status: "pending", user_id: 'XYZ', daily_transaction_product_id: "Bánh mỳ kẹp chả"}, 
//             {id: '4', note: "note example", status: "pending", user_id: 'XXX', daily_transaction_product_id: "Bánh mỳ kẹp giò"},      
            
//         ]
// });

Ext.define('TutorialApp.store.Order', {
    
    fields: [
        'id', 'note', 'status', 'user_id', 'product_id', 'quantity'
    ],
    extend: 'Ext.data.Store',
    requires: [
        'TutorialApp.model.Order'
    ],
    alias: 'store.order',
    model: "TutorialApp.model.Order",
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://192.168.1.87/giochaAPI/public/api/orders?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cDpcL1wvMTkyLjE2OC4xLjg3XC9naW9jaGFBUElcL3B1YmxpY1wvYXBpXC9hdXRoZW50aWNhdGUiLCJpYXQiOjE0NjIzNjM0NDcsImV4cCI6MTQ2MjM3MDY0NywibmJmIjoxNDYyMzYzNDQ3LCJqdGkiOiI3NzMxZjU0YWVlNTFhOTY0NjE0MDhlZmQ4MjY0YTllMyJ9.TvmPZ8UAt7rdsuZGrfARtZU6B3JTnh5rwQffysg41oM',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});