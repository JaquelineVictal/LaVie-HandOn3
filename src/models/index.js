const atendimentos = require("./atendimentos");
const pacientes = require("./pacientes");
const psicologos = require("./psicologos");

atendimentos.belongsTo(psicologos,{
    foreignKey: "id_Psicologos",
});

psicologos.hasMany(atendimentos,{
    foreignKey: "id_Psicologos",
});

pacientes.hasMany(atendimentos,{
    foreignKey: "id_Pacientes",
});

atendimentos.belongsTo(pacientes,{
    foreignKey:"id_Pacientes",
});

module.exports = {
    atendimentos, 
    pacientes, 
    psicologos
}