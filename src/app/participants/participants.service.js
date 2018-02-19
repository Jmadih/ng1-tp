(function () {
  'use strict';

  angular
    .module('ng1tp.participants')
    .factory('participantsService', participantsService);

  function participantsService($http, baseUri) {
    return {
      getAll: getAll
    };

    function getAll() {
      return $http.get(baseUri + '/participants')
        .then(function (res) {
          return res.data;
        }).catch(function () {
          // 404
        });
    }
  }
})();

