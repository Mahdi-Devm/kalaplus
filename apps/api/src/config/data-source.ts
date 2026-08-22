import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export default new DataSource({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || String(process.env.DB_PORT)),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  type: 'postgres',
  entities: ['dist/**/**/**/*.entity{.ts,.js}', 'dist/**/**/*.entity{.ts,.js}'],
  synchronize: false,
  dropSchema: false,
  logging: false,
  logger: 'file',
});
