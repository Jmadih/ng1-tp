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
      },
      resolve: {
        simple: function () {
          return 'simple';
        },
        participants: function (participantsService) {
          return participantsService.getAll();
        }
      }
    }).state('main.editParticipants', {
      url: '/participants/edit/:id',
      views: {
        'content@layout': {
          component: 'editParticipantsComponent'
        }
      },
      resolve: {
        participant: function (participantsService, $stateParams) {
          return participantsService.getParticipant($stateParams.id);
        }
      }
    });
  }
})();
