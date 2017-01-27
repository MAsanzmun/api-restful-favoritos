"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var albumSchema = Schema({
	title: String,
	descripcion: String,
	url: String
});

module.exports = mongoose.model("album", albumSchema);