import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

db.snippet.create({
  data: {
    title: 'Title!',
    code: 'const abc = () => {}'
  }
})

