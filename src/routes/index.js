const express = require("express");
const atendimentoController = require("../controller/atendimentoController");
const pacienteController = require("../controller/pacienteController");
const psicologoController = require("../controller/psicologoController");
const routes = express.Router();

routes.get("/dashboard/psicologos", psicologoController.listarPsicologo);
routes.get("/dashboard/psicologos/:id", psicologoController.listarPsicologo);
routes.post("/dashboard/psicologos", psicologoController.cadastrarPsicologo);
routes.delete("/dashboard/psicologos/:id", psicologoController.listarPsicologo);
routes.put("/dashboard/psicologos/:id", psicologoController.listarPsicologo);

routes.get("/dashboard/pacientes", pacienteController.listarPaciente);
routes.get("/dashboard/pacientes/:id", pacienteController.listarPaciente);
routes.post("/dashboard/pacientes", pacienteController.cadastrarPaciente);
routes.delete("/dashboard/pacientes/:id", pacienteController.listarPaciente);
routes.put("/dashboard/pacientes/:id", pacienteController.listarPaciente);

routes.get("/dashboard/atendimentos", atendimentoController.listarAtendimento);
routes.get("/dashboard/atendimentos/:id", atendimentoController.listarAtendimento);
routes.post("/dashboard/atendimentos", atendimentoController.cadastrarAtendimento);

module.exports = routes;
