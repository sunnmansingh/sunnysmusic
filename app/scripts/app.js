'use strict';
/**
 * @ngdoc overview
 * @name funWithAngularApp
 * @description
 * # funWithAngularApp
 *
 * Main module of the application.
 */
angular
  .module('funWithAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
       .when('/user/:username', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
        .when('/repo/:username/:reponame', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
