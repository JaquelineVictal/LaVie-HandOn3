const express = require("express");
const atendimentosController = require("../controller/atendimentosController");
const pacientesController = require("../controller/pacientesController");
const psicologosController = require("../controller/psicologosController");
const routes = express.Router();

routes.get("/dashboard/psicologos", psicologosController.listarPsicologo);
routes.get("/dashboard/psicologos/:id", psicologosController.listarPsicologo);
routes.post("/dashboard/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/dashboard/psicologos/:id", psicologosController.listarPsicologo);
routes.put("/dashboard/psicologos/:id", psicologosController.listarPsicologo);

routes.get("/dashboard/pacientes", pacientesController.listarPaciente);
routes.get("/dashboard/pacientes/:id", pacientesController.listarPaciente);
routes.post("/dashboard/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/dashboard/pacientes/:id", pacientesController.listarPaciente);
routes.put("/dashboard/pacientes/:id", pacientesController.listarPaciente);

routes.get("/dashboard/atendimentos", atendimentosController.listarAtendimento);
routes.get("/dashboard/atendimentos/:id", atendimentosController.listarAtendimento);
routes.post("/dashboard/atendimentos", atendimentosController.cadastrarAtendimento);

module.exports = routes;
