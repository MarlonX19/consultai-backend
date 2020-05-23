const connection = require('../database/connection');

module.exports = {

    //insert
    async store(req, res) {
        const { filename } = req.file;
        const { first_name, last_name, email, password } = req.body;

        try {
            const response = await connection('doctor').insert({
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

    async listAll(req, res) {

        try {
          const response = await connection('doctor').select('*');
          return res.send(response);
        }
        catch (error) {
          return res.send(error)
        }
      }
}