/// <reference path="../../app.d.ts" />
'use strict';

module RabbitMQ_TestApp.Directives.NavBar {

    angular.module('rabbitMqTest')
        .directive('navBar', function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/nav-bar/nav-bar.html',
                controller: function ($scope, Auth) {
                    $scope.Auth = Auth;
                }
            };
        });
}
