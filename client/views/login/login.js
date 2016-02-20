/// <reference path="../../app.d.ts" />
'use strict';
angular.module('rabbitMqTest')
    .config(function ($stateProvider) {
    $stateProvider
        .state('login', {
        url: '/login',
        views: {
            'app': {
                templateUrl: 'views/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC92aWV3cy9sb2dpbi9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMsWUFBWSxDQUFDO0FBRWIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7S0FDekIsTUFBTSxDQUFDLFVBQVMsY0FBYztJQUUzQixjQUFjO1NBQ1QsS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNaLEdBQUcsRUFBRSxRQUFRO1FBQ2IsS0FBSyxFQUFFO1lBQ0gsS0FBSyxFQUFFO2dCQUNILFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixZQUFZLEVBQUUsSUFBSTthQUNyQjtTQUNKO0tBQ0osQ0FBQyxDQUFDO0FBRVgsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiY2xpZW50L3ZpZXdzL2xvZ2luL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2FwcC5kLnRzXCIgLz5cbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3JhYmJpdE1xVGVzdCcpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcikge1xuXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgICAgICAgICAgIHVybDogJy9sb2dpbicsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2FwcCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbG9naW4vbG9naW4uaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
