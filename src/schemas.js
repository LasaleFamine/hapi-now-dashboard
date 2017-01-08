'use strict'

const Joi = require('joi')

const internals = {
	deploymentsSchema: {
		token: Joi.string().error(new Error('No token specified.')),
	}
}

exports.deploymentsObject = internals.deploymentsSchema
exports.deploymentsSchema = Joi.object().keys(internals.deploymentsSchema)
