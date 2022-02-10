const validatePlant = async (req, res, next) => {
  try {
    const { species, h2oFrequency, details } = req.body;
    if (!species || species === "" || typeof species !== "string") {
      res.status(400).json({ message: "Invalid species" });
    }
    if (
      !h2oFrequency ||
      h2oFrequency === "" ||
      typeof h2oFrequency !== "string"
    ) {
      res.status(400).json({ message: "Invalid watering frequency" });
    }
    if (!details || details === "" || typeof details !== "string") {
      res.status(400).json({ message: "Invalid details" });
    } 
    next()
  } catch (error) {
    next(error);
  }
};

module.exports = {
    validatePlant
}