const atendimentoController = {
    listarAtendimento: (req, res) => {
        res.json([{ id : "1" }, { id : "2" }]);
    },

    cadastrarAtendimento: (req, res) => {
        console.log(req.body);
        res.json("Atendimento agendado!")
    }
};

module.exports = atendimentoController;