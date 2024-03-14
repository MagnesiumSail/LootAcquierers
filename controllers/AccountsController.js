const crypto = require("crypto");
const axios = require("axios");
const bcrypt = require('bcrypt');

//request new key
const requestNewKey = async (req, res) => {
  try {
    const response = await axios.post(
      "https://sandbox-api.marqeta.com/v3/auth/login",
      {
        username: "user",
        password: "password",
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};



module.exports = {
};
