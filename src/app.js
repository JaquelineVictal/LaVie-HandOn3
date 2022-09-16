const express = require("express");
const routes = require("./routes");
const db = require("./database");
const error = require("./middleware/error")

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);
app.use(error);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));