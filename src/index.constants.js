/* global toastr:false */
(function () {
  'use strict';

  angular
    .module('ng1tp')
    .constant('toastr', toastr)
    .constant('baseUri', '/api/v1');
})();
