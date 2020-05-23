const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const UserController = require('./controllers/UserController');
const DoctorController = require('./controllers/DoctorController');

const routes = express.Router();
const uploads = multer(uploadConfig);


routes.get('/users', UserController.listAll);
routes.get('/user', UserController.listData);
routes.post('/users', uploads.single('userphoto'), UserController.store);

routes.get('/doctors', DoctorController.listAll);
routes.get('/doctor', DoctorController.listData);
routes.post('/doctors', uploads.single('doctorphoto'), DoctorController.store);


module.exports = routes;
