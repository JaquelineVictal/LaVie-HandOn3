const Sequelize = require("sequelize");
const db = require("../database");

const db_NAME = "LaVie";
const db_USER = "root";
const db_PASS = "";
const db_CONFIG = { 
    dialect: 'mysql', 
    host: 'localhost', 
    port: 3306
};

// Conexão com o banco de dados
//const db = {};
// Constante db ja esta sendo declarada
try {
    db = new Sequelize(db_NAME, db_USER, db_PASS, db_CONFIG);     
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
