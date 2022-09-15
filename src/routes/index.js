const express = require("express");
const atendimentosController = require("../controller/atendimentosController");
const dashboardController = require("../controller/dashboardController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
const routes = express.Router();

routes.get("/login", psicologosController.login);

routes.get("/atendimentos", atendimentosController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentosController.listarUmAtendimento);
routes.post("/dashboard/atendimentos/cadastrar", atendimentosController.cadastrarAtendimento);

routes.get("/psicologos", psicologosController.listAll);
routes.get("/psicologos/:id_Psicologos", psicologosController.getOne);
routes.post("/psicologos/cadastrar", psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id_Psicologos", psicologosController.updatePsicologo);  //Precisa criar a rota
routes.delete("/psicologos/:id_Psicologos", psicologosController.deletarPsicologo);

routes.get("/pacientes", pacientesController.listarPaciente);
routes.get("/pacientes/:id", pacientesController.listarUmPaciente);
routes.post("/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente); 
routes.put("/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota

routes.get("/dashboard/numero-pacientes", dashboardController.contarPacientes);
routes.get("/dashboard/numero-atendimentos", dashboardController.contarAtendimentos);
routes.get("/dashboard/numero-psicologos", dashboardController.contarPsicologos);
routes.get("/dashboard/media-atendimentos", dashboardController.mediaAtendimentos);

module.exports = routes;
