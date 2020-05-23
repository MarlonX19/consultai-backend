const connection = require('../database/connection');

module.exports = {

  async store(req, res) {
    const { doctor_id, specialization_id } = req.body;

    try {
      const response = await connection('doctor_specialization').insert({ doctor_id, specialization_id });

      return res.send(response);
    }
    catch (error) {
      return res.send(error)
    }
  }
}