const connection = require('../database/connection');


module.exports = {
  async Login(req, res) {
    const { email, password } = req.body;

    try {
      const response = await connection('users').where({
        email,
        password
      }).select('users.first_name', 'users.last_name', 'users.id', 'users.email', 'users.avatar_path')

      if (response.length > 0) {
        return res.status(200).send(response)
      }

      return res.status(404).send({ message: 'Usuário não encontrado', response: response })

    }
    catch (error) {

      return res.send(error)
    }
  }
}