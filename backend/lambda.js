'use strict';
import strapiFactory from '@strapi/strapi';``
const serverless = require('serverless-http');

let server;

module.exports.handler = async (event, context) => {
  if (!server) {
    const strapi = strapiFactory();  // Instantiate Strapi using the factory method
    await strapi.start();  // Start and load Strapi
    server = serverless(strapi.server.app);  // Wrap the app with serverless
  }
  return server(event, context);
};
    