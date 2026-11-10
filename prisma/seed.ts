import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { profileData } from './data.js';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL пуст. Проверьте .env в корне проекта.');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main(): Promise<void> {
  await prisma.profile.deleteMany();
  await prisma.profile.create({ data: profileData });
}

try {
  await main();
  await prisma.$disconnect();
} catch (error: unknown) {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
}
