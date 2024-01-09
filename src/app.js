import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { routerMascotas } from "../rutas/mascotasRouter.js";
import { routerSolicitudesAdopcion } from "../rutas/solicitudesAdopcionRouter.js";
import { routerAdministradores } from "../rutas/administradoresRouter.js";
import {db} from "../database/conexion.js";

const app = express();
app.use(cors());
app.use(bodyParser.json())

//
db.authenticate().then(() => {
    console.log(`Base de datos conectada de manera exitosa.`);
}).catch(err => {
    console.log(`Error al conectarse a la base de datos ::: ${err}`);
})
//
app.get("/lascan", (req, res) => {
    res.send(`Hola, este es el Taller Unidad 2 Backend.`);
});

app.use("/mascotas", routerMascotas);
app.use("/solicitudesAdopcion", routerSolicitudesAdopcion);
app.use("/administradores", routerAdministradores);

//
const PORT = 8000;

db.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor inicializado en puerto ${PORT}`);
    });
}).catch(err => {
    console.log(`Error al sincronizar base de datos ${err}`);
});