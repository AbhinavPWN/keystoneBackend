'use strict';

/**
 * advisory router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::advisory.advisory');
