# [now](https://zeit.co/now) dashboard in Hapi.js

[![Build Status](https://travis-ci.org/LasaleFamine/hapi-now-dashboard.svg?branch=master)](https://travis-ci.org/LasaleFamine/hapi-now-dashboard)

> APIs and server for the [now-dashboard](https://github.com/lasalefamine/now-dashboard)

## Why

Project developed during the #100daysOfCode.  
At the time of writing I needed a dashboard to show my deployments of zeit's [now](https://zeit.co/now) and manage them.

## Usage

	$ git clone https://github.com/LasaleFamine/hapi-now-dashboard.git
	$ yarn
	$ yarn start

The server will start on `port 3000` for default. You can add an env var `$PORT` to specify the port:

 	$ PORT=5000 yarn start

> NOTE: the clone will grab also the UI of this project ([now-dashboard](https://github.com/lasalefamine/now-dashboard)) and it will be exposed on the root of the server `http://localhost:3000/`

## Development

The `dev` command use `supervisor` for hot-reloading.

	$ yarn run dev

If you want to change the port:

	$ PORT=5000 yarn run dev


## Test

> Currently only [xo](https://github.com/sindresorhus/xo)

	$ yarn test

## License

[MIT](https://github.com/LasaleFamine/hapi-now-dashbaord/blob/master/LICENSE.md) &copy; LasaleFamine
