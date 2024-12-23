

import { DataSource } from "typeorm"

import 'dotenv/config'
const {MYSQL_DATABASE,MYSQL_USER,MYSQL_PASSWORD, MYSQL_HOST,NODE_ENV} = process.env
export const myDataSource = new DataSource({
    type: "mysql",
    host: MYSQL_HOST|| "localhost",
    port: 3306,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    entities: ["./src/entity/*.ts"],
    migrations:["./src/migrations/*.ts"],
    logging: NODE_ENV == "development",
})