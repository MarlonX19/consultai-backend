const connection = require('../database/connection');

module.exports = {

  //insert
  async store(req, res) {
    const { filename } = req.file;
    const { first_name, last_name, email, password } = req.body;

    try {
      const response = await connection('doctors').insert({
        first_name,
        last_name,
        email,
        password,
        avatar_path: filename
      });

      return res.send(response);

    }
    catch (error) {
      return res.send(error)
    }
  },
  // listando
  async listAll(req, res) {
    try {
      const response = await connection('doctors').select('*');
      return res.send({response: response});
    }
    catch (error) {
      return res.send(error)
    }
  },

  async listData(req, res) {
    const { doctor_id } = req.body;

    try {
      const response = await connection('doctors').where({ id: doctor_id }).select('*');
      if (response.length > 0) {
        return res.send(response);
      }
      return res.send({ message: 'Médico não encontrado' });
    }
    catch (error) {
      return res.send(error)
    }
  },

  // excluindo medico pelo ID
  async delete(req, res, next) {
    try {
      const {id} = req.params;
      await connection('doctors').where({id}).del();
      return res.status(200).send('Médico excluído com sucesso!');

    } catch (error) {
        next(error);
        return res.status(400).send({message: `Erro na exclusão do ID ${req.params.id}`});
    }
  }
    
}
