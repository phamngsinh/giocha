Ext.define('TutorialApp.store.Categories', {
    extend: 'Ext.data.Store',

    alias: 'store.categories',

    autoLoad: true,
    // pageSize: 5, //item per page

    fields: [
        'id', 'name', 'desciption', 'status'
    ],
    proxy: {
        type: 'rest',
        //url: News.modules.util.common.Util.baseUrl + '/categories'
    }
});