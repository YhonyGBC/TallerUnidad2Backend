import Sequelize from "sequelize";

const db = new Sequelize("RegistroMascotas", "registro_mascotas", "adopcion2023", {
    dialect: "mysql",
    host: "localhost"        
});

export {db}