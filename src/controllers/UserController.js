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

  // listando
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
    const { user_id } = req.params;

    try {
      const response = await connection('users').where({ id: user_id }).select('*');
      if (response.length > 0) {
        return res.send(response);
      }
      return res.send({ message: 'Usuário não encontrado' });
    }
    catch (error) {
      return res.send(error)
    }
  },

  // excluindo usuário pelo ID
  async delete(req, res) {
    try {
      const { id } = req.body;
      const res = await connection('users').where({ id }).del();
      console.log(res)
      return res.status(200).send('Usuário excluído com sucesso!');

    } catch (error) {
      console.log(error)
      return res.send().status(404).send({ message: `Erro na exclusão do ID ${req.params.id}` });
    }
  },

  async update(req, res) {
    const { filename } = req.file;
    const { id, first_name, last_name, email, changedPhoto } = req.body;

    if(filename){
      const resposta = await connection('users').where({ id }).update({ avatar_path: filename, first_name, last_name, email });
      console.log(resposta)
      return res.status(200).send('Usuário atualizado com sucesso! (incluindo foto)');
    }
    else {
      const resp = await connection('users').where({ id }).update({ first_name, last_name, email });
      console.log(resp)
      return res.status(200).send('Usuário atualizado com sucesso! (foto nao)');
    }



    // try {
    //   const res = await connection('users').where({ id }).update({});
    //   console.log(res)
    //   return res.status(200).send('Usuário excluído com sucesso!');

    // } catch (error) {
    //   console.log(error)
    //   return res.send().status(404).send({ message: `Erro na exclusão do ID ${req.params.id}` });
    // }
  }
}
