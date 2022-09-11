const pacienteController = {
    listarPaciente: (req, res) => {
        res.json([{ id : "1" , nome : "Maria Joaquina" }, { id : "2" , nome : "João Felipe" }]);
    },

    cadastrarPaciente: (req, res) => {
        console.log(req.body);
        res.json("Atendimento cadastrado!")
    }
};

module.exports = pacienteController;