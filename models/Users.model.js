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

const createUser = async (data) => {
  const {
    first_name,
    last_name,
    email,
    nid,
    phone,
    user_type_id,
    password,
    userId,
  } = data;

  try {
    return await pool.query(
      `INSERT INTO users(id, first_name, last_name, email, nid, phone, user_type_id, password)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [userId, first_name, last_name, email, nid, phone, user_type_id, password]
    );
  } catch (error) {
    throw error;
  }
};

const checkUserExist = async (nid, email, phone) => {
  try {
    return await pool.query(
      "SELECT * FROM users WHERE nid=$1 OR email=$2 OR phone=$3",
      [nid, email, phone]
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
  createUser,
  checkUserExist,
};

getUsers();
