/// <reference path="../../app.d.ts" />
'use strict';
angular.module('rabbitMqTest')
    .controller('SignupCtrl', function ($location, Auth) {
    var vm = this;
    angular.extend(vm, {
        name: 'SignupCtrl',
        /**
         * User credentials
         */
        user: { email: 'test@test.com', password: 'test' },
        /**
         * Signup
         */
        signup: function () {
            Auth.signup(vm.user)
                .then(function () {
                $location.path('/');
            })
                .catch(function (err) {
                vm.error = err;
            });
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC92aWV3cy9zaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDLFlBQVksQ0FBQztBQUViLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO0tBQ3pCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsVUFBUyxTQUFTLEVBQUUsSUFBSTtJQUU5QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFFZCxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUVmLElBQUksRUFBRSxZQUFZO1FBRWxCOztXQUVHO1FBQ0gsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO1FBRWxEOztXQUVHO1FBQ0gsTUFBTSxFQUFFO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNmLElBQUksQ0FBQztnQkFDRixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBUyxHQUFHO2dCQUNmLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztLQUVKLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImNsaWVudC92aWV3cy9zaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vYXBwLmQudHNcIiAvPlxuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgncmFiYml0TXFUZXN0JylcbiAgICAuY29udHJvbGxlcignU2lnbnVwQ3RybCcsIGZ1bmN0aW9uKCRsb2NhdGlvbiwgQXV0aCkge1xuXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgYW5ndWxhci5leHRlbmQodm0sIHtcblxuICAgICAgICAgICAgbmFtZTogJ1NpZ251cEN0cmwnLFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZXIgY3JlZGVudGlhbHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXNlcjogeyBlbWFpbDogJ3Rlc3RAdGVzdC5jb20nLCBwYXNzd29yZDogJ3Rlc3QnIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2lnbnVwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNpZ251cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgQXV0aC5zaWdudXAodm0udXNlcilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
