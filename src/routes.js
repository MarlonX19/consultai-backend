const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const UserController = require('./controllers/UserController');
const DoctorController = require('./controllers/DoctorController');
const ConsultationController = require('./controllers/ConsultationController');
const SpecializationController = require('./controllers/SpecializationController');
const DocSpec = require('./controllers/DoctorSpecializationController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();
const uploads = multer(uploadConfig);


routes.get('/users', UserController.listAll);
routes.get('/user', UserController.listData);
routes.post('/users', uploads.single('userphoto'), UserController.store);

routes.get('/doctors', DoctorController.listAll);
routes.get('/doctor', DoctorController.listData);
routes.post('/doctors', uploads.single('doctorphoto'), DoctorController.store);


routes.post('/consultations', ConsultationController.store);
routes.get('/consultations', ConsultationController.listAll);
routes.get('/consult', ConsultationController.listConsult);

routes.post('/specializations', SpecializationController.store);
routes.get('/specializations', SpecializationController.listAll);
// routes.get('/consultations', ConsultationController.listAll);
// routes.get('/consult', ConsultationController.listConsult);

routes.post('/docespec', DocSpec.store);
routes.get('/docespec', DocSpec.listDoctors);
routes.get('/alldocespec', DocSpec.listAllDoctors);
// routes.get('/consultations', ConsultationController.listAll);
// routes.get('/consult', ConsultationController.listConsult);


routes.post('/login', AuthController.Login);


module.exports = routes;
