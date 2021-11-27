const prisma = require("../prismaClient");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({});
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
