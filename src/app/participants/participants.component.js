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
      controllerAs: 'participantCtrl'
    });

  function participantsController($log) {
    var vm = this;
    this.$onInit = function () {
      $log.log(vm.simple);
      $log.log(vm.participants);
    };
  }
})();
