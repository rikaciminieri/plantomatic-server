const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const plants = require("./plants");

async function main() {
  for (let plant of plants) {
    await prisma.plant.upsert({
      where: { species: plant.species },
      update: {},
      create: plant
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
