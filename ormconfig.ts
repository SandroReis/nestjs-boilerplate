import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
/** @type {*} */
const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/db/migrations'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export default config;
