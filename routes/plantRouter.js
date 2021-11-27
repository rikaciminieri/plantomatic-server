const router = require("express").Router();
const { prisma } = require("../prismaClient");

const { validatePlant } = require("../plants/plantMiddleware");

router.get("/", async (req, res, next) => {
  try {
    const plants = await prisma.plant.findMany({});
    res.json(plants);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
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

router.post("/", validatePlant, async (req, res, next) => {
  try {
    const plant = await prisma.plant.create({
      data: req.body,
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
