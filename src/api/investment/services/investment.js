'use strict';

/**
 * investment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::investment.investment');
