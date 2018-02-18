(function () {
  'use strict';

  angular
    .module('ng1tp.participants')
    .factory('participantsService', participantsService);

  function participantsService($http, baseUri) {
    return {
      getAll: getAll,
      getParticipant: getParticipant,
      editParticipant: editParticipant
    };

    function getAll() {
      return $http.get(baseUri + '/participants')
        .then(function (res) {
          return res.data;
        }).catch(function () {
          // 404
        });
    }

    function getParticipant(id) {
      return $http.get(baseUri + '/participants/' + id)
        .then(function (res) {
          return res.data;
        }).catch(function () {
          // 404
        });
    }

    function editParticipant(participant) {
      return $http.put(baseUri + '/participants/' + participant.id, participant)
        .then(function (res) {
          return res.data;
        }).catch(function () {
          // 404
        });
    }
  }
})();

