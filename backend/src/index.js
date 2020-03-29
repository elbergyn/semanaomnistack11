const cors = require('cors');

const express = require("express");
const routers = require("./router");

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

app.listen(3333);

console.log("aplicação em porta 3333");