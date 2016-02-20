/// <reference path="../../app.d.ts" />
'use strict';

angular.module('rabbitMqTest')
    .config(function($stateProvider) {

        $stateProvider
            .state('signup', {
                url: '/signup',
                views: {
                    'app': {
                        templateUrl: 'views/signup/signup.html',
                        controller: 'SignupCtrl',
                        controllerAs: 'vm'
                    }
                }
            });

    });
