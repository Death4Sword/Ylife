/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  // findMany() lis les données dans la BDD
  // const allUsers = await prisma.compte.findMany()
  // console.log(allUsers)
  //exemple pour créer un compte dans la BDD
  await prisma.compte.create({
    data: {
      idCompte: 2,
      nom: 'Alice',
      mail: 'alice@prisma.io',
      password: '123456789',
      promo: '2021',
      login: 'alice',
      Filiere: 'informatique',
      prenom: 'Alice',
  },
});

  const allUsers = await prisma.compte.findMany({
  });
  console.dir(allUsers, { depth: null })

  // Pour update un compte dans la BDD
  const compteUpdate = await prisma.compte.update({
    where: { idCompte: 2 },
    data: { nom: 'Bob' },
  });
  console.log(compteUpdate);

}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
