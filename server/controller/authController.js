require("dotenv").config();
const { SECRET } = process.env;
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET,
    {
      expiresIn: "2 days",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        res
          .status(400)
          .send(`username taken,login or try a different username`);
      }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await User.create({ username, hashedPass: hash });
      const token = createToken(
        newUser.dataValues.username,
        newUser.dataValues.id
      );
      const exp = Date.now() + 1000 * 60 * 60 * 48;
      res.status(200).send({
        username: newUser.dataValues.username,
        userId: newUser.dataValues.id,
        token,
        exp,
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(402);
    }
  },

  login: async (req, res) => {
   try{ const { username, password } = req.body;
    let foundUser = await User.findOne({ where: { username } });
    if (foundUser) {
      const isAuthorized = bcrypt.compareSync(password, foundUser.hashedPass);
      if (isAuthorized) {
        const token = createToken(
          foundUser.dataValues.username,
          foundUser.dataValues.id
        );
        const exp = Date.now() + 1000 * 60 * 60 * 48;
        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token,
          exp,
        });
      } else {
        res.status(400).send(`password doesnt match`)
      }
    } else {
        res.status(401).send(`username not found try signing up`)
    }} catch(err){
        console.log(err)
        res.status(403).send(`failure to login,try again`)
    }
  },
};
