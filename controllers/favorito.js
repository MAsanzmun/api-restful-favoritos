'use strict'
var Favorito = require("../models/favorito");

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
function getFavorito(req,res){
	var favoritoId = req.params.id;
	Favorito.findById(favoritoId,function(err,favorito){
		if(err){
			res.status(500).send({message: "Error al devolver el marcador"});
		}
		else{
			if(!favorito){
			res.status(404).send({message: "No hay marcadores"});
			}else{
				res.status(200).send({favorito});
			}
		}
	});
	//console.log("Get Favorito ID:"+favoritoId);
	//res.status(200).send({data: favoritoId});


}
function saveFavorito(req,res){
	var favorito = new Favorito();

	var params = req.body;
	favorito.title = params.title;
	favorito.descripcion = params.descripcion;
	favorito.url = params.url;

	favorito.save((err, favoritoStored) =>{
		if(err){
			res.status(500).send({message: "Error al guardar el marcador"});
		}else{
			res.status(200).send({favorito: favoritoStored});
		}
	});
	console.log("Favorito guardado: "+favorito.title);
	//res.status(200).send({favorito: params});
	
}
function updateFavorito(req,res){
	var favoritoId = req.params.id;
	var update = req.body;
	//console.log(update);


	Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
		if(err){
			res.status(500).send({message: "Error al actualizar el marcador"});
		}
		else{
			res.status(200).send({favorito: favoritoUpdated});
		}
	});
	
}
function deleteFavorito(req,res){
	var favoritoId = req.params.id;
	Favorito.findById(favoritoId,function(err,favorito){
		if(err){
			res.status(500).send({message: "Error al devolver el marcador"});
		}
		else {
			if(!favorito){
			res.status(404).send({message: "No hay marcadores"});
		}
		else{
			favorito.remove(err => {
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
function getFavoritos(req,res){
	Favorito.find({}).sort("-title").exec((err,favoritos)=> {
		if(err){
			res.status(500).send({message: "Error al devolver los marcadores"});
		}
		else{
			if(!favoritos){
			res.status(404).send({message: "No hay marcadores"});
		}else{
			res.status(200).send({favoritos});
		}
		
		}
		
	});
	
}


	module.exports = {
		prueba,
		getFavorito,
		saveFavorito,
		updateFavorito,
		deleteFavorito,
		getFavoritos
	}