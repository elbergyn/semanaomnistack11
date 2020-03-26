const express = require("express");
const OngsController = require('./controller/OngsController');
const IncidentsController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routers = express.Router();

routers.post('/sessions', SessionController.create);

routers.get('/ongs', OngsController.index);
routers.post('/ongs', OngsController.create);

routers.get('/incidents', IncidentsController.index);
routers.post('/incidents', IncidentsController.create);
routers.delete('/incidents/:id', IncidentsController.delete);

routers.get('/profile', ProfileController.index);

module.exports = routers;