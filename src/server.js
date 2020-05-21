const express = require('express');
const cors = require('cors');
//const routes = require('./routes');
const path = require('path');

const app = express();


app.use(cors());
app.use(express.json());
// app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
// app.use(routes);


app.listen(process.env.PORT || 3000, function () {
  console.log('Backend Consultai is listening!');
});
