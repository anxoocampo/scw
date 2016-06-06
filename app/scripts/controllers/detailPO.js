'use strict';

/**
 * @ngdoc function
 * @name scwApp.controller:DetailPOCtrl
 * @description
 * # DetailPOCtrl
 * Controller of the scwApp
 */
angular.module('scwApp')
  .controller('DetailPOCtrl', function ($scope) {
    $scope.pls = [
        {
            number: 123,
            mot: 'Sea',
            dateSubmitted: '8-May-12',
            failed: '',
            veliLabel: '',
            inboundDoc: ''
        },
        {
            number: 234,
            mot: 'Sea',
            dateSubmitted: '9-May-12',
            failed: 'X',
            veliLabel: '',
            inboundDoc: 'X'
        },
        {
            number: 345,
            mot: 'Sea',
            dateSubmitted: '10-May-12',
            failed: '',
            veliLabel: 'X',
            inboundDoc: ''
        },
        {
            number: 456,
            mot: 'Sea',
            dateSubmitted: '11-May-12',
            failed: 'X',
            veliLabel: 'X',
            inboundDoc: 'X'
        }
    ];
  });
