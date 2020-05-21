const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', 'files'),
    filename: (req, file, callback) => {
      callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    },
  })
};
