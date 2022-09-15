const express = require("express");
const atendimentosController = require("../controller/atendimentosController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
const psicologoCreatedValidation = requeri("../validations/psicologos/created");
const psicologoDeletedValidation = requeri("../validations/psicologos/deleted");
const psicologoGetOneValidation = requeri("../validations/psicologos/getOne");
const psicologoUpdateValidation = requeri("../validations/psicologos/update");

const routes = express.Router();

routes.post("/dashboard/login", psicologosController.login);

routes.get("/psicologos", psicologosController.listAll);
routes.get("/psicologos/:id_Psicologos", psicologoGetOneValidation, psicologosController.getOne);
routes.post("/psicologos", psicologoCreatedValidation, psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id_Psicologos", psicologoUpdateValidation, psicologosController.updatePsicologo);  //Precisa criar a rota
routes.delete("/psicologos/:id_Psicologos", psicologoDeletedValidation, psicologosController.deletarPsicologo);

-routes.get("/pacientes", pacientesController.listarPaciente);
routes.get("/pacientes/:id", pacientesController.listarPaciente);
routes.post("/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota
routes.put("/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota


routes.get("/atendimentos", atendimentosController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimento);
routes.post("/atendimentos/cadastrar", atendimentosController.cadastrarAtendimento);

module.exports = routes;