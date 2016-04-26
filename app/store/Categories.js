Ext.define('News.store.Categories', {
    extend: 'News.modules.ultil.store.Base',

    alias: 'store.categories',

    autoLoad: true,
    // pageSize: 5, //item per page

    fields: [
        'id', 'name', 'desciption', 'status'
    ],
    proxy: {
        type: 'rest',
        url: News.modules.util.common.Util.baseUrl + '/categories'
    }
});