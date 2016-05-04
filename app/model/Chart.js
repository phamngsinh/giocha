Ext.define('TutorialApp.model.Chart',{
    extend : 'Ext.data.Model',
    fields: ['month',  'data1',  'data2', 'data3', 'data4', 'other'],
    
    proxy: {
        url: 'http://192.168.2.87/demo/chart.php',
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty : 'data',
            totalProperty: 'total'
        },
//        headers: {
//            'Content-Type': 'application/json',
//            'token': 'Bearer ' + localStorage.getItem('token'),
//            'Authorization': 'Bearer ' + localStorage.getItem('token')
//        },
        listeners: {
            load: function (store, records, success) {
                console.log(1);
            }
        },
        simpleSortMode: true
    }
});