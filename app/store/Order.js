Ext.define('TutorialApp.store.Order', {
    extend: 'Ext.data.Store',
    alias: 'store.order',
    fields: [
        'id', 'note', 'status', 'user', 'daily_transaction_product_id',
    ],
    // model: "TutorialApp.model.Product", 
    data: [
            {id: '1', note: "note example", status: "pending", user_id: 'Viet Anh', daily_transaction_product_id: "Bánh mỳ kẹp chả"}, 
            {id: '2', note: "note example", status: "pending", user_id: 'ABC', daily_transaction_product_id: "Bánh mỳ kẹp giò"}, 
            {id: '3', note: "note example", status: "pending", user_id: 'XYZ', daily_transaction_product_id: "Bánh mỳ kẹp chả"}, 
            {id: '4', note: "note example", status: "pending", user_id: 'XXX', daily_transaction_product_id: "Bánh mỳ kẹp giò"},      
            
        ]
});

// fields: [
//         { name: 'id', type: 'int' },
//         { name: 'note', type: 'string' },
//         { name: 'status', type: 'string' },
//         { name: 'user_id', type: 'string' },
//         { name: 'daily_transaction_product_id', type: 'int' },
//         { name: 'created_at', type: 'string' },
//         { name: 'updated_at', type: 'string' }        
//     ]    