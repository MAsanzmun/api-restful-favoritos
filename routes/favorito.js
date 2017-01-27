'use strict'

var express = require("express");
var albumController = require("../controllers/album");
var api = express.Router();
api.get("/prueba/:nombre?", albumController.prueba);
api.get("/album/:id", albumController.getalbum);
api.post("/album", albumController.savealbum);
api.put("/album/:id", albumController.updatealbum);
api.delete("/album/:id", albumController.deletealbum);
api.get("/albums", albumController.getalbums);
module.exports = api;