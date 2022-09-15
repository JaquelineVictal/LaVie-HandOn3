const express = require("express");
const atendimentosController = require("../controller/atendimentosController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
<<<<<<< Updated upstream
const usuariosController = require ("../controller/usuariosController");
const requestLog = require("../middlewares/requestLog")
const bloqueio = require("../middlewares/bloqueio");
const usuarioCreateValidation = require("../validation/usuarios/create")
const routes = express.Router();

routes.get("/dashboard/psicologos", psicologosController.listarPsicologo);
routes.get("/dashboard/psicologos/:id", psicologosController.listarPsicologo);
routes.post("/dashboard/psicologos/cadastrar", psicologosController.cadastrarPsicologo);
routes.delete("/dashboard/psicologos/:id", psicologosController.listarPsicologo); //Precisa criar a rota
routes.put("/dashboard/psicologos/:id", psicologosController.listarPsicologo);  //Precisa criar a rota

routes.get("/dashboard/pacientes", pacientesController.listarPaciente);
routes.get("/dashboard/pacientes/:id", pacientesController.listarPaciente);
routes.post("/dashboard/pacientes/cadastrar", pacientesController.cadastrarPaciente);
routes.delete("/dashboard/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota
routes.put("/dashboard/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota
=======
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const routes = express.Router();

routes.get("/dashboard/login", requestLog, bloqueio, psicologosController.login);

routes.get("/dashboard/atendimentos", requestLog, atendimentosController.listarAtendimento);
routes.get("/dashboard/atendimentos/:id", requestLog, atendimentosController.listarAtendimento);
routes.post("/dashboard/atendimentos/cadastrar", requestLog, atendimentosController.cadastrarAtendimento);

routes.get("/dashboard/psicologos", requestLog, psicologosController.listAll);
routes.get("/dashboard/psicologos/:id_Psicologos", requestLog, psicologosController.getOne);
routes.post("/dashboard/psicologos/cadastrar", requestLog, psicologosController.cadastrarPsicologo);
routes.put("/dashboard/psicologos/:id_Psicologos", requestLog, psicologosController.updatePsicologo);  //Precisa criar a rota
routes.delete("/dashboard/psicologos/:id_Psicologos", requestLog, psicologosController.deletarPsicologo);

routes.get("/dashboard/pacientes", requestLog, pacientesController.listarPaciente);
routes.get("/dashboard/pacientes/:id", requestLog, pacientesController.listarPaciente);
routes.post("/dashboard/pacientes", requestLog, pacientesController.cadastrarPaciente);
routes.delete("/dashboard/pacientes/:id", requestLog, pacientesController.listarPaciente);  //Precisa criar a rota
routes.put("/dashboard/pacientes/:id", requestLog, pacientesController.listarPaciente);  //Precisa criar a rota
>>>>>>> Stashed changes

routes.get("/dashboard/atendimentos", atendimentosController.listarAtendimento);
routes.get("/dashboard/atendimentos/:id", atendimentosController.listarAtendimento);
routes.post("/dashboard/atendimentos/cadastrar", atendimentosController.cadastrarAtendimento);

module.exports = routes;