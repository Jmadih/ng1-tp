(function () {
  'use strict';

  angular
    .module('ng1tp.shared')
    .filter('undefined', undefinedFilter);

  function undefinedFilter() {
    return function (value) {
      return value || 'N/A';
    };
  }
})();

