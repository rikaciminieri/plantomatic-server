const router = require("express").Router();
const prisma = require("../prismaClient");
const { restricted } = require("../auth/authMiddleware");

const { validatePlant } = require("../plants/plantMiddleware");

router.get("/", restricted, async (req, res, next) => {
  try {
    const plants = await prisma.plant.findMany({});
    res.json(plants);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", restricted, async (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = await prisma.plant.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(plant);
  } catch (error) {
    next(error);
  }
});

router.post("/", restricted, validatePlant, async (req, res, next) => {
  try {
    // This variable gives me access to user ID to connect to Userplants table
    const userId = req.decodedJwt.subject;
    const plant = await prisma.plant.create({
      data: {
        ...req.body,
        users: {
          create: {
            userId
          },
        },
      },
    });
    res.json(plant);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPlant = await prisma.plant.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deletedPlant);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", validatePlant, async (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = await prisma.plant.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });
    res.json(plant);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
