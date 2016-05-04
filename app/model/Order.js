Ext.define('TutorialApp.model.Order', {
    extend: 'Ext.data.Model',    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'note', type: 'string' },
        { name: 'status', type: 'int' },
        { name: 'user_id', type: 'int' },
        { name: 'daily_transaction_id', type: 'int' },
        { name: 'created_at', type: 'int' },
        { name: 'updated_at', type: 'int' },
        { name: 'total', type: 'int' }        
    ]    
});