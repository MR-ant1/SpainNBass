
import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
// import { Roles1708976565121 } from "./migrations/1708976565121-roles";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    migrations: [],
    synchronize: false,
    logging: false,
})