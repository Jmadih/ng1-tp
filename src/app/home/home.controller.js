(function () {
  'use strict';

  angular.module('ng1tp.home').controller('HomeController', HomeController);

  function HomeController($log, simple) {
    var vm = this;
    $log.log(simple);
  }
})();
