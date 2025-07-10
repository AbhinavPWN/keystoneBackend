'use strict';

/**
 * contact-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-email.contact-email');
