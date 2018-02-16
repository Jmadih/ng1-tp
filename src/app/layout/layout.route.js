(function () {
  'use strict';

  angular
    .module('ng1tp.layout').config(configState);

  function configState($stateProvider) {
    $stateProvider
      .state('layout', {
        templateUrl: 'app/layout/layout.html'
      }).state('main', {
        parent: 'layout',
        abstract: true,
        views: {
          menubar: {
            templateUrl: 'app/layout/header/menubar/menubar.html',
            controller: 'MenubarController as menubar'
          },
          footer: {
            templateUrl: 'app/layout/footer/footer.html'
          }
        }
      });
  }
})();
