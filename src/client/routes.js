'use strict'

// const internals = {
// 	plugins: {
// 		authRoutes: {
// 			'hapi-auth-cookie': {
// 				redirectTo: false
// 			}
// 		}
// 	}
// }

module.exports = [{
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		reply.file(`${__dirname}/public/dist/index.html`)
	},
	config: {
		auth: 'simple'
	}
}]
