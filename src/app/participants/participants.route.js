(function () {
  'use strict';

  angular
    .module('ng1tp.participants').config(configState);

  function configState($stateProvider) {
    $stateProvider.state('main.participants', {
      url: '/participants',
      views: {
        'content@layout': {
          component: 'participantsComponent'
        }
      }
    });
  }
})();
