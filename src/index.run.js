(function () {
  'use strict';

  angular
    .module('ng1tp')
    .run(runBlock);

  function runBlock(toastr) {
    toastrRun(toastr);
  }

  function toastrRun(toastr) {
    toastr.options = {
      progressBar: true,
      closeButton: true
    };
  }
})();
