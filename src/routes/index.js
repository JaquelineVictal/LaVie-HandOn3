const express = require("express");
const atendimentosController = require("../controller/atendimentosController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
const usuariosController = require ("../controller/usuariosController");
const requestLog = require("../middlewares/requestLog")
const bloqueio = require("../middlewares/bloqueio");
const usuarioCreateValidation = require("../validation/usuarios/create")
const routes = express.Router();

<<<<<<< Updated upstream
routes.get("/dashboard/psicologos", psicologosController.listarPsicologo);
routes.get("/dashboard/psicologos/:id", psicologosController.listarPsicologo);
routes.post("/dashboard/psicologos/cadastrar", psicologosController.cadastrarPsicologo);
routes.delete("/dashboard/psicologos/:id", psicologosController.listarPsicologo); //Precisa criar a rota
routes.put("/dashboard/psicologos/:id", psicologosController.listarPsicologo);  //Precisa criar a rota
=======
routes.post("/login", usuarioCreateValidation, usuariosController.registro);

routes.get("/dashboard/atendimentos", requestLog, bloqueio, atendimentosController.listarAtendimento);
routes.get("/dashboard/atendimentos/:id", atendimentosController.listarAtendimento);
routes.post("/dashboard/atendimentos/cadastrar", atendimentosController.cadastrarAtendimento);

routes.get("/dashboard/psicologos", psicologosController.listAll);
routes.get("/dashboard/psicologos/:id_Psicologos", psicologosController.getOne);
routes.post("/dashboard/psicologos/cadastrar", psicologosController.cadastrarPsicologo);
routes.put("/dashboard/psicologos/:id_Psicologos", psicologosController.updatePsicologo); 
routes.delete("/dashboard/psicologos/:id_Psicologos", psicologosController.deletarPsicologo);
>>>>>>> Stashed changes

routes.get("/dashboard/pacientes", pacientesController.listarPaciente);
routes.get("/dashboard/pacientes/:id", pacientesController.listarPaciente);
routes.post("/dashboard/pacientes/cadastrar", pacientesController.cadastrarPaciente);
<<<<<<< Updated upstream
routes.delete("/dashboard/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota
routes.put("/dashboard/pacientes/:id", pacientesController.listarPaciente);  //Precisa criar a rota

routes.get("/dashboard/atendimentos", atendimentosController.listarAtendimento);
routes.get("/dashboard/atendimentos/:id", atendimentosController.listarAtendimento);
routes.post("/dashboard/atendimentos/cadastrar", atendimentosController.cadastrarAtendimento);
=======
routes.delete("/dashboard/pacientes/:id", pacientesController.deletarPaciente);  
routes.put("/dashboard/pacientes/:id", pacientesController.listarPaciente);
>>>>>>> Stashed changes

module.exports = routes;