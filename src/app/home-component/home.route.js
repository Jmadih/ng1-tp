(function () {
  'use strict';

  angular
    .module('ng1tp.homecomponent').config(configState);

  function configState($stateProvider) {
    $stateProvider.state('homec', {
      url: '/homec',
      component: 'homeComponent'
    });
  }
})();
