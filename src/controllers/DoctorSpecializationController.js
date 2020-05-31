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
  },

  async listDoctors(req, res) {
    const { specialization_id } = req.body;

    try {
      const response = await connection('doctor_specialization')
        .where({ specialization_id })
        .join('doctors', 'doctor_specialization.doctor_id', 'doctors.id')
        .join('specialization', specialization_id, 'specialization.id')
        .select("doctor_specialization.id",
          "doctors.first_name",
          "doctors.last_name",
          "doctors.phone",
          "doctors.email",
          "doctors.avatar_path",
          "specialization.title"
        );

      if (response.length > 0) {
        return res.send(response);
      }
      else {
        return res.send({ message: 'Nenhum médico possui essa especialidade!' });
      }

    }
    catch (error) {
      return res.send(error)
    }

  },


  async listAllDoctors(req, res) {

    try {
      const response = await connection('doctor_specialization')
        .join('doctors', 'doctor_specialization.doctor_id', 'doctors.id')
        .join('specialization', 'doctor_specialization.specialization_id', 'specialization.id')
        .select("doctor_specialization.id",
          "doctors.first_name",
          "doctors.last_name",
          "doctors.phone",
          "doctors.email",
          "doctors.avatar_path",
          "specialization.title"
        );

      if (response.length > 0) {
        return res.send(response);
      }
      else {
        return res.send({ message: 'Nenhum médico possui essa especialidade!' });
      }

    }
    catch (error) {
      return res.send(error)
    }

  }
}