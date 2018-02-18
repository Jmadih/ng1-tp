(function () {
  'use strict';

  angular
    .module('ng1tp.participants')
    .component('participantsComponent', {
      bindings: {
        simple: '@',
        participants: '<'
      },
      templateUrl: 'app/participants/participants.html',
      controller: participantsController,
      controllerAs: 'participantsCtrl'
    });

  function participantsController($log, participantsService) {
    var vm = this;
    this.$onInit = function () {
      $log.log(vm.simple);
      participantsService.getAll().then(function (data) {
        $log.log(data);
      });
    };
  }
})();
