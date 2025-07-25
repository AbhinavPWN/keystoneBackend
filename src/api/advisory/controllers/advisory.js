'use strict';

/**
 * advisory controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::advisory.advisory');
