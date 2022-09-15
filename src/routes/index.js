const express = require("express");
const atendimentosController = require("../controller/atendimentosController");
const dashboardController = require("../controller/dashboardController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
const routes = express.Router();

routes.get("/dashboard/login", psicologosController.login);

routes.get("/dashboard/atendimentos", atendimentosController.listarAtendimento);
routes.get("/dashboard/atendimentos/:id", atendimentosController.listarUmAtendimento);
routes.post("/dashboard/atendimentos/cadastrar", atendimentosController.cadastrarAtendimento);

routes.get("/dashboard/psicologos", psicologosController.listAll);
routes.get("/dashboard/psicologos/:id_Psicologos", psicologosController.getOne);
routes.post("/dashboard/psicologos/cadastrar", psicologosController.cadastrarPsicologo);
routes.put("/dashboard/psicologos/:id_Psicologos", psicologosController.updatePsicologo);  //Precisa criar a rota
routes.delete("/dashboard/psicologos/:id_Psicologos", psicologosController.deletarPsicologo);

routes.get("/dashboard/pacientes", pacientesController.listarPaciente);
routes.get("/dashboard/pacientes/:id", pacientesController.listarUmPaciente);
routes.post("/dashboard/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/dashboard/pacientes/:id", pacientesController.deletarPaciente); 
routes.put("/dashboard/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota

routes.get("/dashboard/numero-pacientes", dashboardController.contarPacientes);
routes.get("/dashboard/numero-atendimentos", dashboardController.contarAtendimentos);
routes.get("/dashboard/numero-psicologos", dashboardController.contarPsicologos);
routes.get("/dashboard/media-atendimentos", dashboardController.mediaAtendimentos);

module.exports = routes;