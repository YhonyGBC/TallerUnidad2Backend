import { Administradores } from '../modelos/administradoresModel.js'; 

const obtenerTodosLosAdministradores = (req, res) => {
    Administradores.findAll()
        .then((resultados) => {
            if (resultados.length === 0) {
                res.status(404).json({
                    mensaje: "No se encontraron administradores."
                });
            } else {
                res.status(200).json({
                    mensaje: "Búsqueda exitosa",
                    administradores: resultados
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al realizar la búsqueda: ${err}`
            });
        });
};

export {
    obtenerTodosLosAdministradores,
};
