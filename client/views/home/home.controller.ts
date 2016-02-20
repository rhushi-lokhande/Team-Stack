/// <reference path="../../app.d.ts" />
'use strict';

angular.module('rabbitMqTest')
    .controller('HomeCtrl', function() {

        var vm = this;

        angular.extend(vm, {
            name: 'HomeCtrl'
        });

    });
