(function () {
  'use strict';

  angular.module('ng1tp.shared').factory('navigationService', navigationService);

  function navigationService($state) {
    return {
      goParticipants: goParticipants
    };

    function goParticipants() {
      $state.go('main.participants');
    }
  }
})();
