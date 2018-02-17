(function () {
  'use strict';

  angular.module('ng1tp.home').controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.rowCollection = [
      {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'Duchess', birthDate: new Date('1955-08-27'), email: 'raymondef@gmail.com'}
    ];
  }
})();
