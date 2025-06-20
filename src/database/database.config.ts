import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../modules/**/infrastructure/persistence/orm/*.ts'],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
  migrationsRun: true,
  logging: process.env.NODE_ENV === 'development',
};
