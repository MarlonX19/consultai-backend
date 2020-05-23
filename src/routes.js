const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const UserController = require('./controllers/UserController');


const routes = express.Router();
const uploads = multer(uploadConfig);


routes.get('/users', UserController.listAll);
routes.post('/users', UserController.store);


module.exports = routes;
