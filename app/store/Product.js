Ext.define('TutorialApp.store.Product', {
    extend: 'Ext.data.Store',
    alias: 'store.product',
    fields: [
        'name', 'price', 'description'
    ],
    // model: "TutorialApp.model.Product", 
    data: [
            {name: 'Bánh mỳ kẹp chả', price: 12000, description: "Bánh mỳ kẹp chả", creator: 'Dean'},      
            {name: 'Bánh mỳ kẹp giò', price: 12000, description: "Bánh mỳ kẹp giò", creator: 'Dean'},       
            {name: 'Bánh giày kẹp chả', price: 12000, description: "Bánh giày kẹp chả", creator: 'Dean'},       
            {name: 'Bánh giày kẹp giò', price: 12000, description: "Bánh mỳ kẹp giò", creator: 'Dean'}
        ]
});
       // { name: 'id', type: 'int' },
        //{ name: 'name', type: 'string' },
        //{ name: 'price', type: 'string' },
        //{ name: 'description', type: 'string' },
        //{ name: 'creator', type: 'date' },
        //{ name: 'created_at', type: 'string' },
        //{ name: 'updated_at', type: 'string' } 