'use strict';

angular.module('redundantRobot', ['ui.router'])
  .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('redundant', {
      abstract: true
    })
    .state('redundant.home', {
      url: '/',
      views: {
        'container@': { templateUrl: 'public/views/home.html' }
      }
    })
    .state('redundant.sheepshaver', {
      url: '/sheepshaver',
      views: {
        'container@': { templateUrl: 'public/views/sheepshaver.html' }
      }
    })

  });
