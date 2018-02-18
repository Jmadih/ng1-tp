(function () {
  'use strict';

  angular
    .module('ng1tp.participants')
    .component('editParticipantsComponent', {
      bindings: {
        participant: '<'
      },
      templateUrl: 'app/participants/edit/edit-participants.html',
      controller: editParticipantsController,
      controllerAs: 'editpartCtrl'
    });

  function editParticipantsController(participantsService, navigationService, toastr) {
    var vm = this;

    vm.edit = edit;

    function edit(form) {
      participantsService
        .editParticipant(vm.participant).then(function () {
          toastr.success('Participant edited');
          navigationService.goParticipants();
        }).catch(function () {
          form.$setPristine();
          form.$setUntouched();
          toastr.error('Error: something goes wrong');
        });
    }
  }
})();

