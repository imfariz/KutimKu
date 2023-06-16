const express = require('express');

const bodyParser = require('body-parser');

const populationsRoutes = require('../../Interfaces/http/api/populations/routes');
const usersRoutes = require('../../Interfaces/http/api/users/routes');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use('/populations', populationsRoutes(router));
app.use('/users', usersRoutes(router));

module.exports = app;
