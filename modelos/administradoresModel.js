import Sequelize from "sequelize";
import { db } from "../database/conexion.js";

const Administradores = db.define("Administradores", {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'Administradores',
    timestamps: false
});

export { Administradores };
