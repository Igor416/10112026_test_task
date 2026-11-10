export interface AppConfig {
  port: number;
  databaseUrl: string;
  profileSlug: string;
  prismaLogQueries: boolean;
}

export function configuration(): AppConfig {
  const databaseUrl = process.env.DATABASE_URL;
  const profileSlug = process.env.PROFILE_SLUG;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL пуст. Проверьте .env в корне проекта.');
  }

  if (!profileSlug) {
    throw new Error('PROFILE_SLUG пуст. Проверьте .env в корне проекта.');
  }

  const port = Number(process.env.PORT ?? 3000);
  if (!Number.isInteger(port) || port <= 0) {
    throw new Error('PORT должен быть положительным числом.');
  }

  return {
    port,
    databaseUrl,
    profileSlug,
    prismaLogQueries: process.env.PRISMA_LOG_QUERIES === 'true',
  };
}
