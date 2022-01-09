const jwtSecret = require("../config/secret");
const prisma = require("../prismaClient");
const jwt = require("jsonwebtoken");

const checkCredentials = (req, res, next) => {
  const { username, password } = req.body;

  if (username && password) {
    next();
  } else {
    res.status(422).json({ message: "Enter username and password" });
  }
};

const checkUsernameExists = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    console.log(user);
    if (user) {
      res.json({ message: "Username is taken" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        next({ status: 401, message: "Token invalid" });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    next({ status: 401, message: "Token required" });
  }
};

module.exports = { checkCredentials, checkUsernameExists, restricted };
