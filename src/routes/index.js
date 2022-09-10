const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/dashboard/lista", );
routes.post("/dashboard/criar", );
routes.delete("/dashboard/:id/deletar", );
routes.put("/dashboard/:id/atualizar", );

module.exports = routes;
