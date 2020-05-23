const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { first_name, last_name, email, password } = req.body;

    try {
      const response = await connection('users').insert({
        first_name,
        last_name,
        email,
        password
      })

      console.log('response')
      return res.send(response);

    }
    catch (error) {
      return res.send(error)
    }
  },

  async listAll(req, res) {

    try {
      const response = await connection('users').select('*');
      return res.send(response);
    }
    catch (error) {
      return res.send(error)
    }
  }
}