'use strict';

/**
 * @ngdoc overview
 * @name scwApp
 * @description
 * # scwApp
 *
 * Main module of the application.
 */
angular
  .module('scwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ui.mask',
    'ui.select',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/home');

    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .state('pos', {
        url: '/pos',
        templateUrl: 'views/pos.html',
        controller: 'POsCtrl'
      })
      .state('podetail', {
        url: '/detail/:poid',
        templateUrl: 'views/detailPO.html',
        controller: 'DetailPOCtrl'
      })
      .state('createinbound', {
        url: '/create/:poid',
        templateUrl: 'views/createInbound.html',
        controller: 'createInboundCtrl'
      });
  });
