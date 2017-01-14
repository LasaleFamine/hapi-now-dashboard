'use strict'

const Hapi = require('hapi')
const Inert = require('inert')

const routes = require('./api/routes')
const clientRoutes = require('./client/routes')

const server = new Hapi.Server()
server.connection({
	port: process.env.PORT || 3000,
	routes: {cors: true}
})

server.register([Inert], err => {
	if (err) {
		throw err
	}

	// server.auth.strategy('simple', 'bearer-access-token', validation)

	server.route(clientRoutes)
	server.route(routes)

	server.start(err => {
		if (err) {
			throw err
		}
		console.log(`Server running at: ${server.info.uri}`)
	})
})
