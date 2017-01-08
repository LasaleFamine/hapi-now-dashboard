'use strict'

// const Joi = require('joi')
const Schema = require('./../schemas')
const handlers = require('./handlers')

const internals = {
	restapi: '/api/v1',
	plugins: {}
}

module.exports = [
	{
		path: `${internals.restapi}/deployments`,
		method: 'get',
		handler: handlers.deployments,
		config: {
			validate: {
				query: Schema.deploymentsSchema.requiredKeys('token')
			}
		}
	}
]
