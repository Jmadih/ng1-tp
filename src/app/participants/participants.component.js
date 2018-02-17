(function () {
  'use strict';

  angular
    .module('ng1tp.participants')
    .component('participantsComponent', {
      templateUrl: 'app/participants/participants.html',
      controller: participantsController,
      controllerAs: 'participantCtrl'
    });

  function participantsController() {
    var vm = this;
    vm.participants = [
      {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'Duchess', birthDate: new Date('1955-08-27'), email: 'raymondef@gmail.com'}
    ];
  }
})();
