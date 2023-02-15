'use strict';

/**
 * project-tool service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-tool.project-tool');
