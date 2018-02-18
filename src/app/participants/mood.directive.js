(function () {
  'use strict';

  angular
    .module('ng1tp.participants')
    .directive('moodDirective', moodDirective);

  function moodDirective() {
    return {
      restrict: 'E',
      scope: {
        type: '@type'
      },
      template: '' +
      '     <div ng-switch="type" style="font-size:2em">\n' +
      '        <span ng-switch-when="MEH"><i class="fa fa-meh-o" style="color:darkorange"></i></span>\n' +
      '        <span ng-switch-when="SMILE"><i class="fa fa-smile-o" style="color:#428bca"></i></span>\n' +
      '        <span ng-switch-when="FROWN"><i class="fa fa-frown-o" style="color:#8a6d3b"></i></span>\n' +
      '        <span ng-switch-when="HANDPEACE"><i class="fa fa-hand-o-right" style="color:#31708f"></i></span>\n' +
      '        <span ng-switch-default ><i class="fa fa-smile-o"></i></span>\n' +
      '      </div>'
    };
  }
})();

