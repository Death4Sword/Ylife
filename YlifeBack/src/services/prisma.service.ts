import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect().then(() => {
    console.log('Connecté à la base de données');
});

export default prisma;