import { config } from 'dotenv';

config();

const env = process.env;

export const environments = {
  apisPort: Number(env.PORT || 27018),
  jwtSecret: env.JWT_SECRET,
  dbHost: env.DB_HOST,
  dbPort: Number(env.DB_PORT || 27017),
  dbUserName: env.DB_USERNAME,
  dbPassword: env.DB_PASSWORD,
  dbName: env.DB_NAME,
};
