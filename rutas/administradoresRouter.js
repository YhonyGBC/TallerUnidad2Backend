import express from 'express';
import { obtenerTodosLosAdministradores, } from '../controladores/administradoresController.js'; 
const routerAdministradores = express.Router();

routerAdministradores.get("/buscar", (req, res) => {
    obtenerTodosLosAdministradores(req, res);
});

export { routerAdministradores };
