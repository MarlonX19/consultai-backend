const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { first_name, last_name, email, password } = req.body;

    try {
      const response = await connection('users').insert({
        first_name,
        last_name,
        email,
        password,
        avatar_path: filename
      })

      console.log(response)
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
  },

  async listData(req, res) {
    const { user_id } = req.body;

    try {
      const response = await connection('users').where({ id: user_id }).select('*');
      if (response.length > 0) {
        return res.send(response);
      }
      return res.send({ message: 'Usuário não encontrado'});
    }
    catch (error) {
      return res.send(error)
    }


  }
}