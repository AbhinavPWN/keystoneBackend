'use strict';

/**
 * board-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::board-member.board-member');
