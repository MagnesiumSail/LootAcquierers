const { v4: uuidv4 } = require('uuid');
const account = require('../models/userModel');

//request new key
//NEEDS TESTING AND ACTUALLY WRITE TO DB
const requestNewKey = async (req, res) => {
  try {
    if (!req.body.username)
      return res.status(400).json({ message: "Username is required" });
    const newUser = new account({
      username: req.body.username,
      key: uuidv4()
    });
  }
  catch (err) {
    console.log(err);
    res.status(503).json({ message: "Error Adding Account. Database may be unavailable." });
  }
};



module.exports = {
  requestNewKey
};
