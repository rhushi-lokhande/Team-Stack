/// <reference path="../../server.d.ts" />
'use strict';
var passport = require('passport'), FacebookStrategy = require('passport-facebook').Strategy, config = require('../../config/environment');
exports.setup = function (User) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
    passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackURL
    }, function (accessToken, refreshToken, profile, done) {
        User.findOne({ 'facebook.id': profile.id }, function (err, user) {
            if (err)
                return done(err);
            if (!user) {
                var data = {
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    username: profile.username,
                    provider_id: profile.id,
                    provider: 'facebook',
                    facebook: profile._json
                };
                user = new User(data);
                user.save(function (err) {
                    return done(err, user);
                });
            }
            else
                return done(err, user);
        });
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvZmFjZWJvb2svcGFzc3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDLFlBQVksQ0FBQztBQUViLElBQUksUUFBUSxHQUFXLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFDdEMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxFQUN4RCxNQUFNLEdBQWEsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFM0QsT0FBTyxDQUFDLEtBQUssR0FBRyxVQUFTLElBQUk7SUFFekIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFTLElBQUksRUFBRSxJQUFJO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVMsSUFBSSxFQUFFLElBQUk7UUFDeEMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztRQUM5QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRO1FBQ2xDLFlBQVksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVk7UUFDMUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVztLQUMzQyxFQUFFLFVBQVMsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsSUFBSTtRQUVoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO1lBQzFELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDUixJQUFJLElBQUksR0FBRztvQkFDUCxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVc7b0JBQ3pCLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBQzlCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtvQkFDMUIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFO29CQUN2QixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLO2lCQUMxQixDQUFDO2dCQUVGLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQztZQUVQLENBQUM7WUFBQyxJQUFJO2dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNSLENBQUMsQ0FBQyIsImZpbGUiOiJhdXRoL2ZhY2Vib29rL3Bhc3Nwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3NlcnZlci5kLnRzXCIgLz5cbid1c2Ugc3RyaWN0JztcblxudmFyIHBhc3Nwb3J0ICAgICAgICAgPSByZXF1aXJlKCdwYXNzcG9ydCcpLFxuICAgIEZhY2Vib29rU3RyYXRlZ3kgPSByZXF1aXJlKCdwYXNzcG9ydC1mYWNlYm9vaycpLlN0cmF0ZWd5LFxuICAgIGNvbmZpZyAgICAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9jb25maWcvZW52aXJvbm1lbnQnKTtcblxuZXhwb3J0cy5zZXR1cCA9IGZ1bmN0aW9uKFVzZXIpIHtcblxuICAgIHBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoZnVuY3Rpb24odXNlciwgZG9uZSkge1xuICAgICAgICBkb25lKG51bGwsIHVzZXIpO1xuICAgIH0pO1xuXG4gICAgcGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKGZ1bmN0aW9uKHVzZXIsIGRvbmUpIHtcbiAgICAgICAgZG9uZShudWxsLCB1c2VyKTtcbiAgICB9KTtcblxuICAgIHBhc3Nwb3J0LnVzZShuZXcgRmFjZWJvb2tTdHJhdGVneSh7XG4gICAgICAgIGNsaWVudElEOiBjb25maWcuZmFjZWJvb2suY2xpZW50SUQsXG4gICAgICAgIGNsaWVudFNlY3JldDogY29uZmlnLmZhY2Vib29rLmNsaWVudFNlY3JldCxcbiAgICAgICAgY2FsbGJhY2tVUkw6IGNvbmZpZy5mYWNlYm9vay5jYWxsYmFja1VSTFxuICAgIH0sIGZ1bmN0aW9uKGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGRvbmUpIHtcblxuICAgICAgICBVc2VyLmZpbmRPbmUoeyAnZmFjZWJvb2suaWQnOiBwcm9maWxlLmlkIH0sIGZ1bmN0aW9uKGVyciwgdXNlcikge1xuICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWxzWzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogcHJvZmlsZS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJfaWQ6IHByb2ZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiAnZmFjZWJvb2snLFxuICAgICAgICAgICAgICAgICAgICBmYWNlYm9vazogcHJvZmlsZS5fanNvblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB1c2VyID0gbmV3IFVzZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgdXNlci5zYXZlKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIsIHVzZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIsIHVzZXIpO1xuICAgICAgICB9KTtcbiAgICB9KSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
