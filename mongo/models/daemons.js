var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var daemonsSchema = new Schema({
    name: String,
    ip: String,
    port: Number,
    apiKey: String
});

module.exports = mongoose.connection.model('daemons', daemonsSchema);