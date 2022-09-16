const express = require("express");

const loginController = require("../controller/loginController")

const atendimentosController = require("../controller/atendimentosController");
const dashboardController = require("../controller/dashboardController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");

const psicologosCreatedValidation = require("../validations/psicologos/create");
const psicologosDeletedValidation = require("../validations/psicologos/deleted");
const psicologosGetOneValidation = require("../validations/psicologos/getOne");
const psicologosUpdateValidation = require("../validations/psicologos/update");

const pacientesCreatedValidation = require("../validations/pacientes/create");
const pacientesDeletedValidation = require("../validations/pacientes/deleted");
const pacientesGetOneValidation = require("../validations/pacientes/getOne");
const pacientesUpdateValidation = require("../validations/pacientes/update");

const atendimentosCreatedValidation = require("../validations/atendimento/created")
const atendimentosGetOneValidation = require("../validations/atendimento/getOne")

const loginValidation = require("../validations/login/login")
const authValidation = require("../middleware/auth")

const routes = express.Router();


routes.post("/login", loginValidation, loginController.login);

routes.get("/psicologos", psicologosController.listAll);
routes.get("/psicologos/:id_Psicologos", psicologosGetOneValidation, psicologosController.getOne);
routes.post("/psicologos", psicologosCreatedValidation, psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id_Psicologos", psicologosUpdateValidation, psicologosController.updatePsicologo);  //Precisa criar a rota
routes.delete("/psicologos/:id_Psicologos", psicologosDeletedValidation, psicologosController.deletarPsicologo);

routes.get("/pacientes", pacientesController.listarPaciente);

routes.get("/pacientes/:id", pacientesGetOneValidation, pacientesController.listarUmPaciente);

routes.post("/pacientes", pacientesCreatedValidation, pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesDeletedValidation, pacientesController.deletarPaciente);  //Precisa criar a rota
routes.put("/pacientes/:id", pacientesUpdateValidation, pacientesController.updatePaciente);  //Precisa criar a rota

routes.get("/atendimentos", atendimentosController.listarAtendimento);
routes.get("/atendimentos/:id_Atendimentos", atendimentosGetOneValidation, atendimentosController.listarUmAtendimento);
routes.post("/atendimentos",atendimentosCreatedValidation, authValidation, atendimentosController.cadastrarAtendimento);


routes.get("/dashboard/numero-pacientes", dashboardController.contarPacientes);
routes.get("/dashboard/numero-atendimentos", dashboardController.contarAtendimentos);
routes.get("/dashboard/numero-psicologos", dashboardController.contarPsicologos);
routes.get("/dashboard/media-atendimentos", dashboardController.mediaAtendimentos);


module.exports = routes;
