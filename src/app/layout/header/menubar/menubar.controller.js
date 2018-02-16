(function () {
  'use strict';

  angular.module('ng1tp.layout').controller('MenubarController', MenubarController);

  function MenubarController($state) {
    var vm = this;

    vm.$state = $state;
  }
})();
