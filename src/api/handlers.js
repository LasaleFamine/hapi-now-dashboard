const got = require('got')
const Boom = require('boom')
const nJwt = require('njwt')

const API_URL = 'https://api.zeit.co/now'

const helpers = {}

helpers.serialize = (obj, prefix) => {
	const str = []
	let p
	for (p in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, p)) {
			const k = prefix ? prefix + '[' + p + ']' : p
			const	v = obj[p]
			str.push((v !== null && typeof v === 'object') ?
				this._serialize(v, k) :
				encodeURIComponent(k) + '=' + encodeURIComponent(v))
		}
	}
	return str.join('&')
}

const internals = {}

internals.deployments = (request, reply) => {
	const token = request.query.token

	got(`${API_URL}/deployments`, {
		json: true,
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	.then(res => {
		console.log(res)
		return reply(res.body)
	})
	.catch(err => {
		if (err.statusCode === 403) {
			return reply(Boom.forbidden())
		}

		return reply(Boom.badRequest())
	})
}

internals.deploymentsDelete = (request, reply) => {
	const token = request.query.token
	const id = request.params.id

	got.delete(`${API_URL}/deployments/${id}`, {
		json: true,
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	.then(res => {
		console.log(res)
		return reply(res.body)
	})
	.catch(err => {
		console.log(err)
		if (err.statusCode === 403) {
			return reply(Boom.forbidden())
		}

		return reply(Boom.badRequest())
	})
}

module.exports = internals
