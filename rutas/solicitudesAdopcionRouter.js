import express from "express";
import {    obtenerTodasLasSolicitudes,
            obtenerSolicitudPorId,
            agregarNuevaSolicitud,
            actualizarSolicitudPorId,
            eliminarSolicitudPorId
        } from "../controladores/solicitudesAdopcionController.js";

const routerSolicitudesAdopcion = express.Router();

routerSolicitudesAdopcion.get("/", (req, res) => {
    res.send("Bienvenido a Solicitudes Adopción");
});

// Obtener todas las solicitudes
routerSolicitudesAdopcion.get("/buscar", (req, res) => {
    obtenerTodasLasSolicitudes(req, res);
});

// Obtener solicitud por ID
routerSolicitudesAdopcion.get("/buscar/:id",(req,res)=>{
    obtenerSolicitudPorId(req,res);
});

// Agregar nueva solicitud
routerSolicitudesAdopcion.post("/crear", (req, res) => {
    agregarNuevaSolicitud(req, res);
});

// Actualizar solicitud por ID
routerSolicitudesAdopcion.put("/actualizar/:id", (req, res) => {
    actualizarSolicitudPorId(req, res);
});

// Eliminar solicitud por ID
routerSolicitudesAdopcion.delete("/eliminar/:id", (req, res) => {
    eliminarSolicitudPorId(req, res);
});

export { routerSolicitudesAdopcion }