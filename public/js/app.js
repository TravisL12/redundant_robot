'use strict';

angular.module('redundantRobot', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('redundant', {
      abstract: true,
      views: {
        'header': { templateUrl: 'public/views/header.html' }
      }
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
