'use strict';

angular.module('redundantRobot').directive('robotHead', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'public/views/robot_head.html'
  }
})
