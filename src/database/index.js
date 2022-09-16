const Sequelize = require("sequelize");

const DB_NAME = "LaVie";
const DB_USER = "root";
const DB_PASS = "$_Jaque1206_$";
const DB_CONFIG = { 
    dialect: 'mysql', 
    host: 'localhost', 
    port: 3306
};

// Conexão com o banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);     
} catch (error) {
    console.error("Erro ao tentar conectar ao Banco de Dados 1!"); // Esta imprimindo esse erro apresentando que db.define não é uma função.
}

async function hasConection(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.log("Erro ao tentar conectar ao Banco de Dados 2!");
    }
}
Object.assign(db, {
    hasConection,
});

module.exports = db;
