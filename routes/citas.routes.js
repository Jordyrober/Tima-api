const express= require("express");
const CitasController = require ("../controller/citas.controller");

const api = express.Router();

api.post("/cita", CitasController.createCitas);
api.get("/obtenerCita", CitasController.getCitas);
api.delete("/eliminarCita", CitasController.deleteCitas);

module.exports=api;