'use strict';

angular.module('redundantRobot').directive('robotCube', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'public/views/robot_cube.html'
  }
})
