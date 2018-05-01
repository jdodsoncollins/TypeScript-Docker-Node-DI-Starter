'use strict';

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APP_PATH: 'https://us-central1-efx-beta.cloudfunctions.net/api/'
});
