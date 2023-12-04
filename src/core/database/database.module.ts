import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
/* eslint-disable @typescript-eslint/no-var-requires */
const databaseConfig = require('./database.config');

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...databaseConfig,
      autoLoadModels: true,
      sync: false,
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
