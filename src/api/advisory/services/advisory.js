'use strict';

/**
 * advisory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::advisory.advisory');
