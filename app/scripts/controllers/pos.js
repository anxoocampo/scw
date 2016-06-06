'use strict';

/**
 * @ngdoc function
 * @name scwApp.controller:POsCtrl
 * @description
 * # POsCtrl
 * Controller of the scwApp
 */
angular.module('scwApp')
  .controller('POsCtrl', function ($scope) {
    $scope.pos = [
        {
            number: 1234567890,
            destination: 'GB',
            inboundCreated: 'X',
            docsAvailable: 'X',
            failedPO: ''
        },
        {
            number: 1234567890,
            destination: 'GB',
            inboundCreated: '',
            docsAvailable: 'X',
            failedPO: ''
        },
        {
            number: 1234567890,
            destination: 'GB',
            inboundCreated: '',
            docsAvailable: '',
            failedPO: ''
        },
        {
            number: 1234567890,
            destination: 'GB',
            inboundCreated: 'X',
            docsAvailable: 'X',
            failedPO: ''
        },
        {
            number: 1234567890,
            destination: 'GB',
            inboundCreated: 'X',
            docsAvailable: '',
            failedPO: ''
        },
    ];
  });
