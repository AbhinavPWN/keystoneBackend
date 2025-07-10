'use strict';

/**
 * facebook service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::facebook.facebook');
