(function () {
  'use strict';

  angular
    .module('ng1tp.home-component')
    .component('homeComponent', {
      templateUrl: 'app/home-component/home.component.html',
      controller: HomeController,
      controllerAs: 'homeCtrl'
    });

  function HomeController() {
    var vm = this;
    vm.hello = 'Hello component World!';
  }
})();
