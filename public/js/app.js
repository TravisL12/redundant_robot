'use strict';

angular.module('redundantRobot', ['ngRoute'])
  .config(function ($routeProvider) {

    $routeProvider
    .when('/', {
      templateUrl: 'public/views/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });

  });
