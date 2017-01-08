const nJwt = require('njwt')

const validation = {
	allowQueryToken: true, // optional, true by default
	allowMultipleHeaders: false, // optional, false by default
	accessTokenName: 'access_token', // optional, 'access_token' by default
	validateFunc: (token, callback) => {
		const secret = process.env.SECRET_KEY
		try {
			nJwt.verify(token, secret, (err, tk) => {
				console.log(err)
				if (err) {
					return callback(null, false, {err})
				}

				return callback(null, true, {tk})
			})
		} catch (err) {
			console.error(err)
		}
	}
}

module.exports = validation
