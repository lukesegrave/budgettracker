var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mainSchema = new Schema({
	amount:Number,
	description:String
})

var dataBase = mongoose.model('dataBase', mainSchema)

module.exports = dataBase
