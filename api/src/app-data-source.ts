
import { DataSource } from "typeorm"
import dotenv from 'dotenv'
dotenv.config()
const {MYSQL_DATABASE,MYSQL_USER,MYSQL_PASSWORD} = process.env
console.log(MYSQL_DATABASE,MYSQL_USER,MYSQL_PASSWORD)
export const myDataSource = new DataSource({
    type: "mysql",
    host: "db",
    port: 3306,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    entities: ["src/entity/user.entity.ts","src/entity/user.entity.js"],
    logging: true,
    synchronize: true,
})