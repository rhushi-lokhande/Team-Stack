/// <reference path="../../app.d.ts" />
'use strict';
var RabbitMQ_TestApp;
(function (RabbitMQ_TestApp) {
    var Views;
    (function (Views) {
        var Login;
        (function (Login) {
            var LoginController = (function () {
                function LoginController($location, $state, Auth) {
                    this.$location = $location;
                    this.$state = $state;
                    this.Auth = Auth;
                    this.name = 'LoginCtrl';
                    this.user = {
                        email: 'test@test.com',
                        password: 'test'
                    };
                }
                LoginController.prototype.login = function () {
                    var _this = this;
                    this.Auth.login(this.user)
                        .then(function () { return _this.$location.path('/'); })
                        .catch(function (err) { return _this.error = err; });
                };
                LoginController.prototype.facebookLogin = function () {
                    var _this = this;
                    this.Auth.facebookLogin()
                        .then(function () { return _this.$state.go('home'); }, function () { return _this.$state.go('login'); });
                };
                LoginController.$inject = ['$location', '$state', 'Auth'];
                return LoginController;
            })();
            angular.module('rabbitMqTest').controller('LoginCtrl', LoginController);
        })(Login = Views.Login || (Views.Login = {}));
    })(Views = RabbitMQ_TestApp.Views || (RabbitMQ_TestApp.Views = {}));
})(RabbitMQ_TestApp || (RabbitMQ_TestApp = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC92aWV3cy9sb2dpbi9sb2dpbi5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIlJhYmJpdE1RX1Rlc3RBcHAiLCJSYWJiaXRNUV9UZXN0QXBwLlZpZXdzIiwiUmFiYml0TVFfVGVzdEFwcC5WaWV3cy5Mb2dpbiIsIlJhYmJpdE1RX1Rlc3RBcHAuVmlld3MuTG9naW4uTG9naW5Db250cm9sbGVyIiwiUmFiYml0TVFfVGVzdEFwcC5WaWV3cy5Mb2dpbi5Mb2dpbkNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJSYWJiaXRNUV9UZXN0QXBwLlZpZXdzLkxvZ2luLkxvZ2luQ29udHJvbGxlci5sb2dpbiIsIlJhYmJpdE1RX1Rlc3RBcHAuVmlld3MuTG9naW4uTG9naW5Db250cm9sbGVyLmZhY2Vib29rTG9naW4iXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQUN2QyxZQUFZLENBQUM7QUFFYixJQUFPLGdCQUFnQixDQW1DdEI7QUFuQ0QsV0FBTyxnQkFBZ0I7SUFBQ0EsSUFBQUEsS0FBS0EsQ0FtQzVCQTtJQW5DdUJBLFdBQUFBLEtBQUtBO1FBQUNDLElBQUFBLEtBQUtBLENBbUNsQ0E7UUFuQzZCQSxXQUFBQSxLQUFLQSxFQUFDQSxDQUFDQTtZQUVqQ0M7Z0JBUUlDLHlCQUNZQSxTQUE4QkEsRUFDOUJBLE1BQTJCQSxFQUMzQkEsSUFBa0JBO29CQUZsQkMsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBcUJBO29CQUM5QkEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBcUJBO29CQUMzQkEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBY0E7b0JBVHZCQSxTQUFJQSxHQUFHQSxXQUFXQSxDQUFDQTtvQkFXdEJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBO3dCQUNSQSxLQUFLQSxFQUFFQSxlQUFlQTt3QkFDdEJBLFFBQVFBLEVBQUVBLE1BQU1BO3FCQUNuQkEsQ0FBQ0E7Z0JBQ05BLENBQUNBO2dCQUVERCwrQkFBS0EsR0FBTEE7b0JBQUFFLGlCQUlDQTtvQkFIR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7eUJBQ3JCQSxJQUFJQSxDQUFDQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUF4QkEsQ0FBd0JBLENBQUNBO3lCQUNwQ0EsS0FBS0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsRUFBaEJBLENBQWdCQSxDQUFDQSxDQUFDQTtnQkFDeENBLENBQUNBO2dCQUVERix1Q0FBYUEsR0FBYkE7b0JBQUFHLGlCQUlDQTtvQkFIR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUE7eUJBQ3BCQSxJQUFJQSxDQUFDQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUF0QkEsQ0FBc0JBLEVBQzlCQSxjQUFNQSxPQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUF2QkEsQ0FBdUJBLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0E7Z0JBdkJNSCx1QkFBT0EsR0FBR0EsQ0FBQ0EsV0FBV0EsRUFBRUEsUUFBUUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBd0JyREEsc0JBQUNBO1lBQURBLENBOUJBRCxBQThCQ0MsSUFBQUQ7WUFFREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsRUFBRUEsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDNUVBLENBQUNBLEVBbkM2QkQsS0FBS0EsR0FBTEEsV0FBS0EsS0FBTEEsV0FBS0EsUUFtQ2xDQTtJQUFEQSxDQUFDQSxFQW5DdUJELEtBQUtBLEdBQUxBLHNCQUFLQSxLQUFMQSxzQkFBS0EsUUFtQzVCQTtBQUFEQSxDQUFDQSxFQW5DTSxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBbUN0QiIsImZpbGUiOiJjbGllbnQvdmlld3MvbG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9hcHAuZC50c1wiIC8+XG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZSBSYWJiaXRNUV9UZXN0QXBwLlZpZXdzLkxvZ2luIHtcblxuICAgIGNsYXNzIExvZ2luQ29udHJvbGxlciB7XG5cbiAgICAgICAgcHVibGljIG5hbWUgPSAnTG9naW5DdHJsJztcbiAgICAgICAgcHVibGljIHVzZXI7XG4gICAgICAgIHB1YmxpYyBlcnJvcjtcblxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFsnJGxvY2F0aW9uJywgJyRzdGF0ZScsICdBdXRoJ107XG5cbiAgICAgICAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICBwcml2YXRlICRsb2NhdGlvbjogbmcuSUxvY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgIHByaXZhdGUgJHN0YXRlOiBuZy51aS5JU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgcHJpdmF0ZSBBdXRoOiBJQXV0aFNlcnZpY2UpIHtcblxuICAgICAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgICAgIGVtYWlsOiAndGVzdEB0ZXN0LmNvbScsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICd0ZXN0J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgdGhpcy5BdXRoLmxvZ2luKHRoaXMudXNlcilcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJykpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLmVycm9yID0gZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZhY2Vib29rTG9naW4oKSB7XG4gICAgICAgICAgICB0aGlzLkF1dGguZmFjZWJvb2tMb2dpbigpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy4kc3RhdGUuZ28oJ2hvbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy4kc3RhdGUuZ28oJ2xvZ2luJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3JhYmJpdE1xVGVzdCcpLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIExvZ2luQ29udHJvbGxlcik7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=