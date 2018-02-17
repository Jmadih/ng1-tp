describe('participants component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('participants', function () {
      return {
        templateUrl: 'app/participants.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<participants></participants>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
