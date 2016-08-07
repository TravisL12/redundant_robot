'use strict';

angular.module('redundantRobot', ['ui.router'])
  .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'public/views/home.html'
    })

  });
