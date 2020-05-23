const connection = require('../database/connection');


module.exports = {

  async store(req, res) {
    const { date, time, symptons, doctor_id, user_id } = req.body;

    try {
      const response = await connection('consultations').insert({
        date,
        time,
        symptons,
        doctor_id,
        user_id
      });
      console.log(response)
      return res.send(response)
    }
    catch (error) {
      console.log(error)

      return res.send(error)
    }
  },

  async listAll(req, res) {

    try {
      const response = await connection('consultations').select("*");
      console.log(response)
      if (response.length > 0) {
        return res.send(response)
      }
      return res.send({ message: 'Nenhum consulta encontrada' });
    }
    catch (error) {
      console.log(error)

      return res.send(error)
    }
  }
}