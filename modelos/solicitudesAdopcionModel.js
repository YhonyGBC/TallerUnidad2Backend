import Sequelize from "sequelize";
import { db } from "../database/conexion.js";
import { Mascotas } from "./mascotasModel.js";

const SolicitudesAdopcion = db.define("SolicitudesAdopcion", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    mascota_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    nombre_solicitante: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    correo_solicitante: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    telefono_solicitante: {
        type: Sequelize.STRING(20),
    },
    estado: {
        type: Sequelize.STRING(50),
        defaultValue: 'Pendiente',
    }
}, {
    tableName: 'SolicitudesAdopcion',
    timestamps: false,
    createdAt: false,
    updateAt: false
});

SolicitudesAdopcion.belongsTo(Mascotas, { foreignKey: 'mascota_id' });

export { SolicitudesAdopcion };
