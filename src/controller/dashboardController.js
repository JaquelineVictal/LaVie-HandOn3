const Atendimentos = require("../models/atendimentos");
const Pacientes = require("../models/pacientes");
const Psicologos = require("../models/psicologos");

const dashboardController = {

     contarPacientes: async (req, res) => {
        const numeroPacientes = await Pacientes.count()
            res.status(200).json(`Temos ${numeroPacientes} pacientes cadastrados!`)
    },

     contarAtendimentos: async (req, res) =>{
        const numeroAtendimentos = await Atendimentos.count()
        res.status(200).json(`Temos ${numeroAtendimentos} atendimentos cadastrados!`)
    },

     contarPsicologos: async (req, res) => {
        const numeroPsicologos = await Psicologos.count()
        res.status(200).json(`Temos ${numeroPsicologos} psicólogos cadastrados!`)
    },

     mediaAtendimentos: async (req, res) => {
        const mediaAtendimentos = await Atendimentos.count()
        const mediaPsicologos = await Psicologos.count()
        const media = (mediaAtendimentos/mediaPsicologos)
        res.status(200).json(`A média de atendimentos por psicólogos é de ${media} atendimentos!`)
    }
}

module.exports = dashboardController;
