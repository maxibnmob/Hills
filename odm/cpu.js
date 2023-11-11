var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _ClientSchema = new Schema({
	// Имя клиента
	client_name: String,
	// Почта клиента
	client_email: String

});

const Client = mongoose.model('Client', _ClientSchema)

module.exports = Client;