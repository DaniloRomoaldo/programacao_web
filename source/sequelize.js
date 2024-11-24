// @ts-nocheck
import Sequelize from 'sequelize';
import 'dotenv/config'
//import path from "path";

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
    connection: {
      dialect: 'postgres',
      host: DB_HOST,
      port: parseInt(DB_PORT),
      database: DB_DATABASE,
      username: DB_USER,
      password: DB_PASSWORD    }
  }
}


//console.log(config)
export const sequelize = new Sequelize(config.development.connection);