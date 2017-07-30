(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Moradores',
        icon: 'view_module',
        sref: '.data-table'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Settings',
        icon: 'settings',
        sref: '.table'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
