'use strict'

const pkginfo = require('../../package.json')
const spec = require('../spec')

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Public
 *     summary: Show API information.
 *     operationId: showApiInfo
 *     responses:
 *       200:
 *         description: Describe general API information
 */
exports.welcome = ctx => {
    const data = {
        name: pkginfo.name,
        version: pkginfo.version,
        description: pkginfo.description,
    }

    ctx.res.ok(data, 'Hello, API!')
}

exports.showSwaggerSpec = ctx => {
    ctx.body = spec
}
