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
        participants: function () {
          return [
            {
              firstName: 'Blandine',
              lastName: 'Faivre',
              birthDate: new Date('1987-04-25'),
              email: 'oufblandou@gmail.com'
            },
            {
              firstName: 'Laurent',
              lastName: 'Renard',
              birthDate: new Date('1987-05-21'),
              email: 'whatever@gmail.com'},
            {
              firstName: 'Francoise',
              lastName: 'Duchess',
              birthDate: new Date('1955-08-27'),
              email: 'raymondef@gmail.com'
            }
          ];
        }
      }
    });
  }
})();
