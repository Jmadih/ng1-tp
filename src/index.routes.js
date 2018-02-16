(function () {
  'use strict';

  angular
    .module('ng1tp')
    .config(routesConfig);

  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/home');
  }
})();
