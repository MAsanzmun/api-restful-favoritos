"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FavoritoSchema = Schema({
	title: String,
	descripcion: String,
	url: String
});

module.exports = mongoose.model("Favorito", FavoritoSchema);