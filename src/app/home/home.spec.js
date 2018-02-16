describe('hello component', function () {
  beforeEach(module('ng1tp', function ($provide) {
    $provide.factory('app', function () {
      return {
        templateUrl: 'app/home/home.html'
      };
    });
  }));
  it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<ng1tp>Loading...</ng1tp>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
