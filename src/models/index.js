const Atendimentos = require("../models/atendimentos");
const Pacientes = require("../models/pacientes");
const Psicologos = require("../models/psicologos");

//Relacionamento com Sequilise

Atendimentos.belongsTo(Pacientes,{
    foreignKey: "id_Pacientes"

});

Pacientes.hasMany(Atendimentos,{
    foreignKey: "id_Pacientes"

})

Atendimentos.belongsTo(Psicologos,{
    foreignKey: "id_Psicologos"

});

Psicologos.hasMany(Atendimentos,{
    foreignKey: "id_Psicologos"

})

module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos
}