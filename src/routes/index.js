const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/dashboard/psicologos", );
routes.get("/dashboard/psicologos/:id")
routes.post("/dashboard/psicologos", );
routes.delete("/dashboard/psicologos/:id", );
routes.put("/dashboard/psicologos/:id", );

routes.get("/dashboard/pacientes", );
routes.get("/dashboard/pacientes/:id")
routes.post("/dashboard/pacientes", );
routes.delete("/dashboard/pacientes/:id", );
routes.put("/dashboard/pacientes/:id", );

routes.get("/dashboard/atendimentos", );
routes.get("/dashboard/atendimentos/:id")
routes.post("/dashboard/atendimentos", );

module.exports = routes;
