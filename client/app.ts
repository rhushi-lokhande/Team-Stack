/// <reference path="app.d.ts" />
'use strict';

module RabbitMQ_TestApp {

    angular.module('rabbitMqTest', [
        'ui.router',
        'ngStorage',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'btford.socket-io'
    ])

        .constant('CONFIG', {
            'API_SERVER': 'http://localhost:9000',
            'IS_DESKTOP_APP': (typeof isDesktopApp !== 'undefined' ? isDesktopApp : false)
        })

        .config(function(
            $stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: ng.ILocationProvider,
            $httpProvider: ng.IHttpProvider ,
            CONFIG: IAppConfig) {

            $urlRouterProvider.otherwise('/login');
            if (!CONFIG.IS_DESKTOP_APP)
                $locationProvider.html5Mode(true);
            $httpProvider.interceptors.push('authInterceptor');
        })

        .factory('authInterceptor', function(
            $q: ng.IQService,
            $localStorage,
            $location: ng.ILocationService) {

            return {

                request: function(config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }

                    return config;
                },

                responseError: function(response) {
                    if (response.status === 401) {
                        $location.path('/login');
                        delete $localStorage.token;
                        return $q.reject(response);
                    }
                    else {
                        return $q.reject(response);
                    }
                }
            };
        });

}
