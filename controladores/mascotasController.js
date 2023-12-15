import { Mascotas } from "../modelos/mascotasModel.js"

// Obtener todas las mascotas
const obtenerTodasLasMascotas = (req, res) => {
    Mascotas.findAll()
        .then((resultados) => {
            if (resultados.length === 0) {
                res.status(404).json({
                    mensaje: "No se encontraron mascotas."
                });
            } else {
                res.status(200).json({
                    mensaje: "Búsqueda exitosa",
                    mascotas: resultados
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al realizar la búsqueda: ${err}`
            });
        });
};

// Obtener información de una mascota por ID
const obtenerMascotaPorId = (req, res) => {
    const mascotaId = req.params.id;

    if (!mascotaId || isNaN(mascotaId)) {
        res.status(400).json({
            mensaje: "No es válido el Id de mascota."
        });
        return;
    }

    Mascotas.findByPk(mascotaId)
        .then((resultado) => {
            if (!resultado) {
                res.status(404).json({
                    mensaje: "No se encontró la mascota."
                });
            } else {
                res.status(200).json({
                    mensaje: "Búsqueda exitosa",
                    mascota: resultado
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al realizar la búsqueda: ${err}`
            });
        });
};

// Crear una nueva mascota
const agregarNuevaMascota = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).json({
            mensaje: "El nombre no puede estar vacío."
        });
        return;
    }

    if (!req.body.tipo) {
        res.status(400).json({
            mensaje: "El tipo de mascota no puede estar vacío."
        });
        return;
    }

    const dataset = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        raza: req.body.raza,
        edad: req.body.edad,
        descripcion: req.body.descripcion,
        estado: req.body.estado
    };

    Mascotas.create(dataset)
        .then((resultado) => {
            res.status(200).json({
                mensaje: "Registro creado correctamente"
            });
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al crear el registro ::: ${err}`
            });
        });
};

// Actualizar información de una mascota por ID
const actualizarMascotaPorId = (req, res) => {
    const mascotaId = req.params.id;

    if (!mascotaId || isNaN(mascotaId)) {
        res.status(400).json({
            mensaje: "No es válido el Id de mascota."
        });
        return;
    }

    Mascotas.findByPk(mascotaId)
        .then((mascota) => {
            if (!mascota) {
                res.status(404).json({
                    mensaje: "No se encontró la mascota."
                });
                return;
            } else {
                res.status(200).json({
                    mensaje: "Actualización exitosa."
                });

                mascota.nombre = req.body.nombre || mascota.nombre;
                mascota.tipo = req.body.tipo || mascota.tipo;
                mascota.raza = req.body.raza || mascota.raza;
                mascota.edad = req.body.edad || mascota.edad;
                mascota.descripcion = req.body.descripcion || mascota.descripcion;
                mascota.estado = req.body.estado || mascota.estado;

                return mascota.save();
            }
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al realizar la actualización: ${err}`
            });
        });
};

// Eliminar una mascota por ID
const eliminarMascotaPorId = (req, res) => {
    const mascotaId = req.params.id;

    if (!mascotaId || isNaN(mascotaId)) {
        res.status(400).json({
            mensaje: "No es válido el Id de mascota."
        });
        return;
    }

    Mascotas.destroy({
        where: {
            id: mascotaId
        }
    })
        .then((resultado) => {
            if (resultado === 0) {
                res.status(404).json({
                    mensaje: "No se encontró la mascota."
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
    obtenerTodasLasMascotas,
    obtenerMascotaPorId,
    agregarNuevaMascota,
    actualizarMascotaPorId,
    eliminarMascotaPorId
}
