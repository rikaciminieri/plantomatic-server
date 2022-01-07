const prisma = require("../prismaClient");

const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/secret");
const {
  checkCredentials,
  checkUsernameExists,
} = require("../auth/authMiddleware");

router.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({});
    res.json(users);
  } catch (error) {
    next(error);
  }
});

const generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  const options = {
    expiresIn: "24hr",
  };
  return jwt.sign(payload, jwtSecret, options);
};

router.post("/login", checkCredentials, async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome ${username}`, token });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/register", checkUsernameExists, async (req, res, next) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
