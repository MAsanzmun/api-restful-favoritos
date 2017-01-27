'use strict'
var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT || 3200;

mongoose.connect("mongodb://localhost:27017/cursoalbums",(err,res) =>{
if(err){
	throw err;
}else{
	console.log("Conexión con MongoDB correcta.");
	app.listen(port, () =>{
	console.log(`API REST albumS esta funcionando en http://localhost:${port}`);
	

});


}





});
