(function () {
  'use strict';

  angular
    .module('ng1tp.home').config(configState);

  function configState($stateProvider) {
    $stateProvider.state('main.home', {
      url: '/home',
      views: {
        'content@layout': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController as homeCtrl'
        }
      }
    });
  }
})();
