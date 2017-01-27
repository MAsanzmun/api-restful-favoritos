'use strict'
var album = require("../models/album");

function prueba(req,res) {
	//res.send("Hola Mundo con Node JS y Express");
	if(req.params.nombre){
		var nombre = req.params.nombre;
	}
	else{
		var nombre = "SIN NOMBRE";
	}
	res.status(200).send({
		data:[2,3,4], 
		message: "Hola Mundo con Node JS y Express "+nombre
	});
};
function getalbum(req,res){
	var albumId = req.params.id;
	album.findById(albumId,function(err,album){
		if(err){
			res.status(500).send({message: "Error al devolver el marcador"});
		}
		else{
			if(!album){
			res.status(404).send({message: "No hay marcadores"});
			}else{
				res.status(200).send({album});
			}
		}
	});
	//console.log("Get album ID:"+albumId);
	//res.status(200).send({data: albumId});


}
function savealbum(req,res){
	var album = new album();

	var params = req.body;
	album.title = params.title;
	album.descripcion = params.descripcion;
	album.url = params.url;

	album.save((err, albumStored) =>{
		if(err){
			res.status(500).send({message: "Error al guardar el marcador"});
		}else{
			res.status(200).send({album: albumStored});
		}
	});
	console.log("album guardado: "+album.title);
	//res.status(200).send({album: params});
	
}
function updatealbum(req,res){
	var albumId = req.params.id;
	var update = req.body;
	//console.log(update);


	album.findByIdAndUpdate(albumId, update, (err, albumUpdated) => {
		if(err){
			res.status(500).send({message: "Error al actualizar el marcador"});
		}
		else{
			res.status(200).send({album: albumUpdated});
		}
	});
	
}
function deletealbum(req,res){
	var albumId = req.params.id;
	album.findById(albumId,function(err,album){
		if(err){
			res.status(500).send({message: "Error al devolver el marcador"});
		}
		else {
			if(!album){
			res.status(404).send({message: "No hay marcadores"});
		}
		else{
			album.remove(err => {
				if(err){
					res.status(500).send({message: "Error al borrar!!"});
				}else{
					res.status(200).send({message: "El marcador ha sido borrado!!"});
				}
			});
		}
		}
		
	});
}
function getalbums(req,res){
	album.find({}).sort("-title").exec((err,albums)=> {
		if(err){
			res.status(500).send({message: "Error al devolver los marcadores"});
		}
		else{
			if(!albums){
			res.status(404).send({message: "No hay marcadores"});
		}else{
			res.status(200).send({albums});
		}
		
		}
		
	});
	
}


	module.exports = {
		prueba,
		getalbum,
		savealbum,
		updatealbum,
		deletealbum,
		getalbums
	}