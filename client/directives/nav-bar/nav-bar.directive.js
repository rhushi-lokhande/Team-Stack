/// <reference path="../../app.d.ts" />
'use strict';
var RabbitMQ_TestApp;
(function (RabbitMQ_TestApp) {
    var Directives;
    (function (Directives) {
        var NavBar;
        (function (NavBar) {
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
        })(NavBar = Directives.NavBar || (Directives.NavBar = {}));
    })(Directives = RabbitMQ_TestApp.Directives || (RabbitMQ_TestApp.Directives = {}));
})(RabbitMQ_TestApp || (RabbitMQ_TestApp = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9kaXJlY3RpdmVzL25hdi1iYXIvbmF2LWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiUmFiYml0TVFfVGVzdEFwcCIsIlJhYmJpdE1RX1Rlc3RBcHAuRGlyZWN0aXZlcyIsIlJhYmJpdE1RX1Rlc3RBcHAuRGlyZWN0aXZlcy5OYXZCYXIiXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQUN2QyxZQUFZLENBQUM7QUFFYixJQUFPLGdCQUFnQixDQVl0QjtBQVpELFdBQU8sZ0JBQWdCO0lBQUNBLElBQUFBLFVBQVVBLENBWWpDQTtJQVp1QkEsV0FBQUEsVUFBVUE7UUFBQ0MsSUFBQUEsTUFBTUEsQ0FZeENBO1FBWmtDQSxXQUFBQSxNQUFNQSxFQUFDQSxDQUFDQTtZQUV2Q0MsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7aUJBQ3pCQSxTQUFTQSxDQUFDQSxRQUFRQSxFQUFFQTtnQkFDakIsTUFBTSxDQUFDO29CQUNILFFBQVEsRUFBRSxHQUFHO29CQUNiLFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLFVBQVUsRUFBRSxVQUFVLE1BQU0sRUFBRSxJQUFJO3dCQUM5QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQztpQkFDSixDQUFDO1lBQ04sQ0FBQyxDQUFDQSxDQUFDQTtRQUNYQSxDQUFDQSxFQVprQ0QsTUFBTUEsR0FBTkEsaUJBQU1BLEtBQU5BLGlCQUFNQSxRQVl4Q0E7SUFBREEsQ0FBQ0EsRUFadUJELFVBQVVBLEdBQVZBLDJCQUFVQSxLQUFWQSwyQkFBVUEsUUFZakNBO0FBQURBLENBQUNBLEVBWk0sZ0JBQWdCLEtBQWhCLGdCQUFnQixRQVl0QiIsImZpbGUiOiJjbGllbnQvZGlyZWN0aXZlcy9uYXYtYmFyL25hdi1iYXIuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2FwcC5kLnRzXCIgLz5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlIFJhYmJpdE1RX1Rlc3RBcHAuRGlyZWN0aXZlcy5OYXZCYXIge1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3JhYmJpdE1xVGVzdCcpXG4gICAgICAgIC5kaXJlY3RpdmUoJ25hdkJhcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2RpcmVjdGl2ZXMvbmF2LWJhci9uYXYtYmFyLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsIEF1dGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkF1dGggPSBBdXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
