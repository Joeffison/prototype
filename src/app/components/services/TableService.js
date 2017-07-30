(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        issue: 'Ayris Raquel',
        building: 'Bloco A',
        progress: 100,
        status: 'Paid',
        class: 'md-accent'
      },
      {
        issue: 'George Vidal',
          building: 'Bloco A',
        progress: 40,
        status: 'Feedback',
        class: ''
      },
      {
        issue: 'Joeffison Andrade',
          building: 'Bloco A',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'Fernando Silvério',
          building: 'Bloco A',
        progress: 84,
        status: '2 months',
        class: 'orange'
      },
      {
        issue: 'Oscar Wilde',
          building: 'Bloco A',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'Dorian Gray',
          building: 'Bloco A',
        progress: 20,
        status: '4 months',
        class: ''
      },
      {
        issue: 'Lord Henry',
          building: 'Bloco A',
        progress: 1,
        status: 'Setor Juridico',
        class: 'md-warn'
      },
      {
        issue: 'John Landry',
          building: 'Bloco A',
        progress: 100,
        status: 'Paid',
        class: 'md-accent'
      }
    ];

    function PickRandom() {
      return Object.assign({}, tableData[Math.floor(Math.random()*tableData.length)]);
    }

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      },
      /**
       * Query expects that `limit`,`page`, and `order` fields be present
       */
      loadByPagination: function (query) {
        query = query || {limit:10,page:1};
        var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];
        var list = [];
        var start = (query.page-1)*query.limit;
        var end = start + query.limit;
        for (var i = start; i < end; i++) {
          var f = PickRandom();
          var b = Math.floor(i/16);
          f.building = 'Bloco ' + letter[b];

          var apto_id = i - b*16;
          var floor = Math.floor(apto_id/4);
          f.id = floor + '0' + (apto_id - floor*4 +1);
          list.push(f);
        }
        return $q.when({items:list,count:800});
      }
    };
  }
})();
