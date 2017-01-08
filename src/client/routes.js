'use strict'

const Path = require('path')
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
		reply.file(`${__dirname}/public/app/dist/index.html`)
	}
}, {
    method: 'GET',
    path: '/static/{param*}',
    handler: {
        directory: {
            path: Path.normalize(`${__dirname}/public/app/dist/static`)
        }
    }
  }]
