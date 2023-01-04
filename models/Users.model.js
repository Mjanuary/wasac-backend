const pool = require("../connection");

const getUsers = async (user_type_id = 1) => {
  try {
    return await pool.query("SELECT * FROM users WHERE user_type_id=$1", [
      user_type_id,
    ]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
};

getUsers();
