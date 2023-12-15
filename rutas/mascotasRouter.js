import express from "express";
import {    obtenerTodasLasMascotas,
            obtenerMascotaPorId,
            agregarNuevaMascota,
            actualizarMascotaPorId,
            eliminarMascotaPorId           
        } from "../controladores/mascotasController.js";

const routerMascotas = express.Router();

routerMascotas.get("/", (req, res) => {
    res.send("Bienvenido a Mascotas");
});

// Obtener todas las mascotas
routerMascotas.get("/buscar", (req, res) => {
    obtenerTodasLasMascotas(req, res);
});

// Obtener mascota por ID
routerMascotas.get("/buscar/:id",(req,res)=>{
    obtenerMascotaPorId(req,res);
});

// Agregar nueva mascota
routerMascotas.post("/crear", (req, res) => {
    agregarNuevaMascota(req, res);
});

// Actualizar mascota por ID
routerMascotas.put("/actualizar/:id", (req, res) => {
    actualizarMascotaPorId(req, res);
});

// Eliminar mascota por ID
routerMascotas.delete("/eliminar/:id", (req, res) => {
    eliminarMascotaPorId(req, res);
});

export { routerMascotas }