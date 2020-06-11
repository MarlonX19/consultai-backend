const connection = require('../database/connection');

module.exports = {

  async store(req, res) {
    const { date, time, symptons, doctor_id, user_id, isOpen } = req.body;

    try {
      const response = await connection('consultations').insert({
        date,
        time,
        symptons,
        isOpen,
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
      const response = await connection('consultations')
      .join('doctors', 'consultations.doctor_id', 'doctors.id')
      .join('doctor_specialization', 'consultations.doctor_id', 'doctor_specialization.doctor_id')
      .join('specialization', 'doctor_specialization.specialization_id', 'specialization.id')
      .select("consultations.*",
      "doctors.first_name",
      "doctors.last_name",
      "doctors.phone",
      "doctors.email",
      "doctors.avatar_path",
      "doctor_specialization.*",
      "specialization.*"
    );
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
  },

  async listConsult(req, res) {
    const { user_id } = req.params;

    try {
      const response = await connection('consultations')
        .where({ user_id })
        .join('doctors', 'consultations.doctor_id', 'doctors.id')
        .select("consultations.id",
          "consultations.symptons",
          "consultations.isOpen",
          "consultations.time",
          "consultations.date",
          "doctors.first_name",
          "doctors.last_name",
          "doctors.phone",
          "doctors.email",
          "doctors.avatar_path",
        );

      if (response.length > 0) {
        return res.send(response)
      }
      return res.send({ message: 'Nenhum consulta encontrada' });
    }
    catch (error) {
      console.log(error)

      return res.send(error)
    }
  },

  // excluindo consulta pelo ID
  async delete(req, res, next) {
    try {
      const { id } = req.body;
      await connection('consultations').where({ id }).del();
      return res.status(200).send({ message: 'Consulta excluída com sucesso!' });

    } catch (error) {
      next(error);
      return res.status(404).send({ message: `Erro na exclusão do ID ${req.params.id}` });
    }
  }
}
