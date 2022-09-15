const express = require("express");
const routes = express.Router();
const atendimentosController = require("../controller/atendimentosController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");

routes.get("/dashboard/login", psicologosController.login);

routes.get("/dashboard/atendimentos", atendimentosController.listarAtendimento);
routes.get("/dashboard/atendimentos/:id", atendimentosController.listarAtendimento);
routes.post("/dashboard/atendimentos/cadastrar", atendimentosController.cadastrarAtendimento);

routes.get("/dashboard/psicologos", psicologosController.listAll);
routes.get("/dashboard/psicologos/:id_Psicologos", psicologosController.getOne);
routes.post("/dashboard/psicologos/cadastrar", psicologosController.cadastrarPsicologo);
routes.put("/dashboard/psicologos/:id_Psicologos", psicologosController.updatePsicologo);  //Precisa criar a rota
routes.delete("/dashboard/psicologos/:id_Psicologos", psicologosController.deletarPsicologo);

routes.get("/dashboard/pacientes", pacientesController.listarPaciente);
routes.get("/dashboard/pacientes/:id", pacientesController.listarPaciente);
routes.post("/dashboard/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/dashboard/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota
routes.put("/dashboard/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota

module.exports = routes;