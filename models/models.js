var mongoose = require('mongoose'),
connection = process.env.MONGOLAB_URI;
mongoose.connect(connection);

module.exports = {
	queries : require('./queries.js'),
	airports : require('./airports.js'),
	cities : require('./cities.js')
};