/// <reference path="../../server.d.ts" />
'use strict';

module.exports = {
    ip: process.env.IP || undefined,
    server: {
        url: 'http://www.rabbitMqTest.com'
    },
    mongo: {
        uri: 'mongodb://localhost/rabbitmq-test'
    },
    facebook: {
        clientID: '975041909195011',
        clientSecret: '6bcf8b64f80546cfd799a4f467cd1a20',
        callbackURL: '/auth/facebook/callback'
    }
};
