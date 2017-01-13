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
		method: 'GET',
		handler: handlers.deployments,
		config: {
			validate: {
				query: Schema.deploymentsSchema.requiredKeys('token')
			}
		}
	}, {
		path: `${internals.restapi}/deployments/{id}`,
		method: 'DELETE',
		handler: handlers.deploymentsDelete,
		config: {
			validate: {
				query: Schema.deploymentsSchema.requiredKeys('token')
			}
		}
	}, {
		path: `${internals.restapi}/deployments/{id}/files`,
		method: 'GET',
		handler: handlers.deploymentsFiles,
		config: {
			validate: {
				query: Schema.deploymentsSchema.requiredKeys('token')
			}
		}
	}
]
