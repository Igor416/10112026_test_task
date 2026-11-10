import 'dotenv/config';
import { LinkType, SkillCategory } from '../src/generated/prisma/enums.js';

const profileSlug = process.env.PROFILE_SLUG;

if (!profileSlug) {
  throw new Error('PROFILE_SLUG пуст. Проверьте .env в корне проекта.');
}

export const profileData = {
  slug: profileSlug,
  name: 'Игорь Гросу',
  description:
    'Full-stack разработчик с фокусом на backend. Проектирую API, доступ к данным и интеграции так, чтобы сервисы можно было развивать по отдельности. В работе и пет-проектах: TypeScript, Node.js, NestJS, Prisma, GraphQL, PostgreSQL, Docker. Параллельно сильный Python-бэкенд (Django/FastAPI) и опыт вывода систем в продакшен.',
  links: {
    create: [
      {
        type: LinkType.GITHUB,
        label: 'GitHub',
        url: 'https://github.com/Igor416',
        sortOrder: 0,
      },
      {
        type: LinkType.LINKEDIN,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/igor-grosu-a4814b255/',
        sortOrder: 1,
      },
      {
        type: LinkType.TELEGRAM,
        label: 'Telegram',
        url: 'https://t.me/mb49ki',
        sortOrder: 2,
      },
      {
        type: LinkType.WEBSITE,
        label: 'Резюме',
        url: 'https://grosu-igor.vercel.app/',
        sortOrder: 3,
      },
    ],
  },
  skills: {
    create: [
      { name: 'TypeScript', category: SkillCategory.LANGUAGE, sortOrder: 0 },
      { name: 'Python', category: SkillCategory.LANGUAGE, sortOrder: 1 },
      { name: 'SQL', category: SkillCategory.LANGUAGE, sortOrder: 2 },
      { name: 'Node.js', category: SkillCategory.RUNTIME, sortOrder: 3 },
      { name: 'NestJS', category: SkillCategory.FRAMEWORK, sortOrder: 4 },
      { name: 'GraphQL', category: SkillCategory.FRAMEWORK, sortOrder: 5 },
      { name: 'Prisma', category: SkillCategory.TOOL, sortOrder: 6 },
      {
        name: 'Django / FastAPI',
        category: SkillCategory.FRAMEWORK,
        sortOrder: 7,
      },
      { name: 'PostgreSQL', category: SkillCategory.DATABASE, sortOrder: 8 },
      { name: 'Redis', category: SkillCategory.DATABASE, sortOrder: 9 },
      { name: 'Docker', category: SkillCategory.TOOL, sortOrder: 10 },
      { name: 'Git', category: SkillCategory.TOOL, sortOrder: 11 },
      { name: 'JWT / OAuth 2.0', category: SkillCategory.OTHER, sortOrder: 12 },
      { name: 'GCP', category: SkillCategory.OTHER, sortOrder: 13 },
      {
        name: 'Claude / Anthropic tooling',
        category: SkillCategory.TOOL,
        sortOrder: 14,
      },
    ],
  },
  experiences: {
    create: [
      {
        company: 'Grid Dynamics',
        position: 'UI Engineer',
        startDate: new Date('2026-09-01T00:00:00.000Z'),
        endDate: null,
        sortOrder: 0,
        achievements: {
          create: [
            {
              text: 'Пишу продакшен-UI в международной enterprise-команде: дизайн-системы, стандарты клиента и регулярное code review.',
              sortOrder: 0,
            },
            {
              text: 'Работаю в распределённой команде с сильным TypeScript-стеком и акцентом на качество кода и поддерживаемость.',
              sortOrder: 1,
            },
          ],
        },
      },
      {
        company: 'Grid Dynamics',
        position: 'UI Intern',
        startDate: new Date('2026-03-01T00:00:00.000Z'),
        endDate: new Date('2026-08-31T00:00:00.000Z'),
        sortOrder: 1,
        achievements: {
          create: [
            {
              text: 'Закрывал реальные UI-задачи вместе с сеньорами: компоненты, клиентские стандарты, ревью и доведение до продакшена.',
              sortOrder: 0,
            },
            {
              text: 'Усилил практику работы в git-процессе enterprise-команды и в распределённом международном формате.',
              sortOrder: 1,
            },
          ],
        },
      },
      {
        company: 'Decimus Legio',
        position: 'Full-stack разработчик',
        startDate: new Date('2025-05-01T00:00:00.000Z'),
        endDate: new Date('2026-03-31T00:00:00.000Z'),
        sortOrder: 2,
        achievements: {
          create: [
            {
              text: 'Вёл full-stack развитие клиентского e-commerce и внутренней системы учёта/операций для бизнеса в Молдове.',
              sortOrder: 0,
            },
            {
              text: 'Поддерживал оба контура в продакшене: новые функции, фиксы и адаптация под меняющиеся бизнес-правила.',
              sortOrder: 1,
            },
          ],
        },
      },
      {
        company: 'Freelance',
        position: 'Full-stack разработчик (фокус на backend)',
        startDate: new Date('2022-01-01T00:00:00.000Z'),
        endDate: new Date('2025-12-31T00:00:00.000Z'),
        sortOrder: 3,
        achievements: {
          create: [
            {
              text: 'Закрывал полный цикл: требования, архитектура, backend/API, клиент и выкладка в Linux-продакшен с последующей поддержкой.',
              sortOrder: 0,
            },
            {
              text: 'Спроектировал и внедрил платформу из 5 микросервисов с выделенным auth-сервисом (JWT, OAuth) и общей библиотекой бизнес-логики.',
              sortOrder: 1,
            },
            {
              text: 'Нормализовал 4 000+ внешних ссылок и обработал 216 PDF в 10 000+ структурированных сущностей для внутренних пайплайнов.',
              sortOrder: 2,
            },
            {
              text: 'Собрал realtime-чат на WebSocket (Channels + Redis) и 3 продакшен Telegram-бота с интеграцией в backend API.',
              sortOrder: 3,
            },
            {
              text: 'Сопровождал продакшен-нагрузку: на одном проекте ~27 995 уникальных посетителей и ~403 ГБ трафика за 2025 год.',
              sortOrder: 4,
            },
          ],
        },
      },
    ],
  },
  projects: {
    create: [
      {
        name: 'Цифровая визитка (NestJS + GraphQL)',
        url: 'https://.....',
        description:
          'Backend-визитка на NestJS, Prisma, GraphQL и Docker. Через Apollo Sandbox отдаёт профиль, опыт, навыки и проекты — этот сервис.',
        sortOrder: 0,
      },
      {
        name: 'Микросервисная full-stack платформа',
        url: 'https://.....',
        description:
          'Пять Python-сервисов в продакшене: выделенный auth (JWT/OAuth), защищённый REST между сервисами и общая библиотека бизнес-логики.',
        sortOrder: 1,
      },
      {
        name: 'Автоматизация данных и парсинг',
        url: 'https://.....',
        description:
          'Пайплайны нормализации 4 000+ ссылок, разбор 216 PDF в 10 000+ сущностей, Excel-ingest и валидация в отдельных сервисах.',
        sortOrder: 2,
      },
      {
        name: 'Realtime-чат и взаимодействия',
        url: 'https://.....',
        description:
          'WebSocket-чат на Django Channels и Redis, matching like/dislike в realtime, деплой за Nginx с TLS и мониторингом.',
        sortOrder: 3,
      },
      {
        name: 'Vegas',
        url: 'https://www.vegas.md/',
        description: 'Продакшен full-stack проект в публичном доступе.',
        sortOrder: 4,
      },
      {
        name: 'K1 Lube',
        url: 'https://k1lube.ru/',
        description: 'Продакшен full-stack проект в публичном доступе.',
        sortOrder: 5,
      },
      {
        name: 'Kappa Spirits',
        url: 'https://www.kappaspirits.com/',
        description: 'Продакшен full-stack проект в публичном доступе.',
        sortOrder: 6,
      },
    ],
  },
};
