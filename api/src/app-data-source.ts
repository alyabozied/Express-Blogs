

import { DataSource } from "typeorm"
import 'dotenv/config'
import { User } from "./entity/user.entity"
import { Blog } from "./entity/blog.entity"
const {MYSQL_DATABASE,MYSQL_USER,MYSQL_PASSWORD, MYSQL_HOST,NODE_ENV} = process.env
export const myDataSource = new DataSource({
    type: "mysql",
    host: MYSQL_HOST|| "localhost",
    port: 3306,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    entities: [User,Blog],
    migrations:["migrations/*.ts"],
    logging: NODE_ENV == "development",
})