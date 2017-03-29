/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: "amzn1.application-oa2-client.bd4cfc329bbc4bbb9461ad6ee069bd7a",
    clientSecret: "9ea7378a9daf26bfeaaff3fa0a58908a724950934b33fb93a873e465e351b24d",
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: "amazon.com",
    lwaApiHost: "api.amazon.com",
    validateCertChain: true,
    sslKey: "/home/pi/alexa-avs-sample-app/samples/javaclient/certs/server/node.key",
    sslCert: "/home/pi/alexa-avs-sample-app/samples/javaclient/certs/server/node.crt",
    sslCaCert: "/home/pi/alexa-avs-sample-app/samples/javaclient/certs/ca/ca.crt",
    products: {
        "raspberrypi": ["123456789"],
    },
};

module.exports = config;
