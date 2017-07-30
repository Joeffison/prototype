(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;
        var total = 4000; // (3872+5264);

        vm.data = getDataForPaid;
        // TODO: move data to the service
        vm.visitorsChartData = [ { key: 'Not Paid', y: 3872}, {key: 'Paid', y: 5264} ];

        vm.thismonthChartData = getDataForPaid(0.30);
        vm.thisyearChartData = getDataForPaid(0.80);
        vm.overviewChartData = getDataForPaid(0.85);

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#E75753', 'rgb(0, 150, 136)'],
                showLabels: false,
                showLegend: false,
                title: 'Status',
                margin: { top: -10 }
            }
        };

        function getDataForPaid(percentagePaid) {
            var paid = Math.floor(total*percentagePaid);
            var notPaid = total - paid;

            return [ { key: 'Not Paid', y: notPaid}, {key: 'Paid', y: paid} ];
        }
    }
})();
