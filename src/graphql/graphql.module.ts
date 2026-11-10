import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';
import { AchievementLoader } from '../achievement/achievement.loader.js';
import { AchievementModule } from '../achievement/achievement.module.js';
import { graphqlEnums, registerEnums } from './enums.js';
import type { GraphqlContext } from './graphql-context.js';

registerEnums();

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [AchievementModule],
      inject: [AchievementLoader],
      useFactory: (achievementLoader: AchievementLoader) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        introspection: true,
        graphiql: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
        buildSchemaOptions: {
          orphanedTypes: graphqlEnums.map((item) => item.ref),
        },
        context: (): GraphqlContext => ({
          loaders: {
            achievements: achievementLoader.create(),
          },
        }),
      }),
    }),
  ],
})
export class GraphqlModule {}
