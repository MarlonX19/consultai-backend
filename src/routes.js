const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const routes = express.Router();
const uploads = multer(uploadConfig);


routes.get('/users', (req, res) => {

  const data = { name: 'Marvin', age: 43 };

  return res.send(data);
})


module.exports = routes;
