const psicologoController = {
    listarPsicologo: (req, res) => {
        res.json([{ id : "1" , nome : "Maria Joaquina" }, { id : "2" , nome : "João Felipe" }]);
    },

    cadastrarPsicologo: (req, res) => {
        console.log(req.body);
        res.json("Psicologo cadastrado!")
    }
};

module.exports = psicologoController;