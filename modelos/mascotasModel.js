import Sequelize from "sequelize";
import { db } from "../database/conexion.js";

const Mascotas = db.define("Mascotas", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING(255), 
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    raza: {
        type: Sequelize.STRING(100),
    },
    edad: {
        type: Sequelize.INTEGER,
    },
    descripcion: {
        type: Sequelize.TEXT,
    },
    estado: {
        type: Sequelize.STRING(50),
        defaultValue: 'Disponible',
    }
}, {
    timestamps: false,
    createdAt: false,
    updateAt: false
});

export { Mascotas };
