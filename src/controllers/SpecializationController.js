const connection = require('../database/connection');


module.exports = {

  async store(req, res) {
    const { title } = req.body;

    try {
      const response = await connection('specialization').insert({
        title
      });

      return res.send(response);
    }
    catch (error) {
      return res.send(error)
    }
  },

  async listAll(req, res) {
    
    try {
      const response = await connection('specialization').select('*');

      return res.send(response);
    }
    catch (error) {
      return res.send(error)
    }
  }
}