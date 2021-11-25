import { PrismaClient} from require("@prisma/client")
const prisma = new PrismaClient()

import { plants } from "./plants"

async function main() {
    await prisma.plant.createMany({
        data: plants
    })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })