// @ts-nocheck
import Knex from 'knex';
import 'dotenv/config'
//import dotenv from 'dotenv';
//dotenv.config({path:'./knex/.env'});

// Professor, quando eu coloco a .env na pasta knex, a migration funciona e a api não funciona.
// quando eu coloco a .env na source, a api funciona, mas a migration não funciona.
// deixei a api funcionando e acertei a migration, mas não consegui fazer os 2 funcionar mesmo mapeando a .env 

const {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  NODE_ENV
} = process.env;


const config = {
  development: {
    client: 'pg',
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds',
    },
    connection: {
      host: DB_HOST,
      port: parseInt(DB_PORT),
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD
    }
  }
}

//console.log(config)
export const database = Knex(config['development']);
export default config;

