const connection = require('../database/connection');


module.exports = {

  async store(req, res) {
    const { date, time, symptons, doctor_id, user_id } = req.body;

    try {
      const response = connection('consultations').insert({
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
  }
}