const connection = require('../database/connection');

module.exports = {

    //insert
    async store(req, res) {
        const { first_name, last_name, email, password, avatar_path } = req.body;

        try {
            const response = await connection('doctors').insert({
                first_name,
                last_name,
                email,
                password,
                avatar_path
            });

            console.log('response');
            return res.send(response);

        }
        catch (error) {
            return res.send(error)
        }
    },

    async listAll(req, res) {

        try {
          const response = await connection('doctors').select('*');
          return res.send(response);
        }
        catch (error) {
          return res.send(error)
        }
      }
}