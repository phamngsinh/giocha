Ext.define('TutorialApp.view.charts.MarkedController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.line-marked',

    onAxisLabelRender: function (axis, label, layoutContext) {
        return label.toFixed(label < 10 ? 1: 0) + 'cái';
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        var title = item.series.getTitle();

        tooltip.setHtml(title + ' on ' + record.get('month') + ': ' +
            record.get(item.series.getYField()) + 'cái');
    },

    onColumnRender: function (v) {
        return v + 'Cái';
    },

    onToggleMarkers: function () {
        var chart = this.lookupReference('chart'),
            seriesList = chart.getSeries(),
            ln = seriesList.length,
            i = 0,
            series;

        for (; i < ln; i++) {
            series = seriesList[i];
            series.setShowMarkers(!series.getShowMarkers());
        }

        chart.redraw();
    },

    onPreview: function () {
        var chart = this.lookupReference('chart');
        chart.preview();
    }

});