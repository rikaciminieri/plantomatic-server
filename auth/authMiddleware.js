const prisma = require("../prismaClient");

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
    const userExists = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (userExists.username) {
      res.json({ message: "Username is taken" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { checkCredentials, checkUsernameExists };
