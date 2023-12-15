import { SolicitudesAdopcion } from "../modelos/solicitudesAdopcionModel.js"

// Obtener todas las solicitudes de adopción
const obtenerTodasLasSolicitudes = (req, res) => {
    SolicitudesAdopcion.findAll()
        .then((resultados) => {
            if (resultados.length === 0) {
                res.status(404).json({
                    mensaje: "No se encontraron solicitudes de adopción."
                });
            } else {
                res.status(200).json({
                    mensaje: "Búsqueda exitosa",
                    solicitudes: resultados
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al realizar la búsqueda: ${err}`
            });
        });
};

// Obtener información de una solicitud de adopción por ID
const obtenerSolicitudPorId = (req, res) => {
    const solicitudId = req.params.id;

    if (!solicitudId || isNaN(solicitudId)) {
        res.status(400).json({
            mensaje: "No es válido el Id de solicitud de adopción."
        });
        return;
    }

    SolicitudesAdopcion.findByPk(solicitudId)
        .then((resultado) => {
            if (!resultado) {
                res.status(404).json({
                    mensaje: "No se encontró la solicitud de adopción."
                });
            } else {
                res.status(200).json({
                    mensaje: "Búsqueda exitosa",
                    solicitud: resultado
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al realizar la búsqueda: ${err}`
            });
        });
};

// Crear una nueva solicitud de adopción
const agregarNuevaSolicitud = (req, res) => {
    if (!req.body.mascota_id) {
        res.status(400).json({
            mensaje: "El id de la mascota la cual se pide adoptar no puedo estar vacío."
        });
        return;
    }

    if (!req.body.nombre_solicitante || !req.body.correo_solicitante) {
        res.status(400).json({
            mensaje: "El nombre o el correo del solicitante no puede estar vacío."
        });
        return;
    }

    const dataset = {
        mascota_id: req.body.mascota_id,
        nombre_solicitante: req.body.nombre_solicitante,
        correo_solicitante: req.body.correo_solicitante,
        telefono_solicitante: req.body.telefono_solicitante,
        estado: req.body.estado
    };

    SolicitudesAdopcion.create(dataset)
        .then((resultado) => {
            res.status(200).json({
                mensaje: "Solicitud de adopción creada correctamente"
            });
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al crear la solicitud de adopción: ${err}`
            });
        });
};

// Actualizar información de una solicitud de adopción por ID
const actualizarSolicitudPorId = (req, res) => {
    const solicitudId = req.params.id;

    if (!solicitudId || isNaN(solicitudId)) {
        res.status(400).json({
            mensaje: "No es válido el Id de solicitud de adopción."
        });
        return;
    }

    SolicitudesAdopcion.findByPk(solicitudId)
        .then((solicitud) => {
            if (!solicitud) {
                res.status(404).json({
                    mensaje: "No se encontró la solicitud de adopción."
                });
                return;
            } else {
                res.status(200).json({
                    mensaje: "Actualización exitosa."
                });

                solicitud.mascota_id = req.body.mascota_id || solicitud.mascota_id;
                solicitud.nombre_solicitante = req.body.nombre_solicitante || solicitud.nombre_solicitante;
                solicitud.correo_solicitante = req.body.correo_solicitante || solicitud.correo_solicitante;
                solicitud.telefono_solicitante = req.body.telefono_solicitante || solicitud.telefono_solicitante;
                solicitud.estado = req.body.estado || solicitud.estado;

                return solicitud.save();
            }
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al realizar la actualización: ${err}`
            });
        });
};

// Eliminar una solicitud de adopción por ID
const eliminarSolicitudPorId = (req, res) => {
    const solicitudId = req.params.id;

    if (!solicitudId || isNaN(solicitudId)) {
        res.status(400).json({
            mensaje: "No es válido el Id de solicitud de adopción."
        });
        return;
    }

    SolicitudesAdopcion.destroy({
        where: {
            id: solicitudId
        }
    })
        .then((resultado) => {
            if (resultado === 0) {
                res.status(404).json({
                    mensaje: "No se encontró la solicitud de adopción."
                });
            } else {
                res.status(200).json({
                    mensaje: "Eliminación exitosa."
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al realizar la eliminación: ${err}`
            });
        });
};

export {
    obtenerTodasLasSolicitudes,
    obtenerSolicitudPorId,
    agregarNuevaSolicitud,
    actualizarSolicitudPorId,
    eliminarSolicitudPorId
}