Ext.define('TutorialApp.model.Order', {
    extend: 'Ext.data.Model',    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'note', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'user_id', type: 'string' },
        { name: 'daily_transaction_product_id', type: 'int' },
        { name: 'created_at', type: 'string' },
        { name: 'updated_at', type: 'string' }        
    ]    
});