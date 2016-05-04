Ext.define('TutorialApp.store.Customer', {
    extend: 'Ext.data.Store',
    alias: 'store.customer',
    fields: [
        'id', 'note', 'status', 'customer', 'daily_transaction_product_id',
    ],
    // model: "TutorialApp.model.Product", 
    data: [
        {id: '1', note: "note example", status: "pending", customer_id: 'Viet Anh', daily_transaction_product_id: "Bánh mỳ kẹp chả"},
        {id: '2', note: "note example", status: "pending", customer_id: 'ABC', daily_transaction_product_id: "Bánh mỳ kẹp giò"},
        {id: '3', note: "note example", status: "pending", customer_id: 'XYZ', daily_transaction_product_id: "Bánh mỳ kẹp chả"},
        {id: '4', note: "note example", status: "pending", customer_id: 'XXX', daily_transaction_product_id: "Bánh mỳ kẹp giò"},
    ]
});

// fields: [
//         { name: 'id', type: 'int' },
//         { name: 'note', type: 'string' },
//         { name: 'status', type: 'string' },
//         { name: 'customer_id', type: 'string' },
//         { name: 'daily_transaction_product_id', type: 'int' },
//         { name: 'created_at', type: 'string' },
//         { name: 'updated_at', type: 'string' }        
//     ]    