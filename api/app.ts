
import express , {Request , Response} from 'express';
import {User} from './src/entity/user.entity'
import dotenv from 'dotenv'
dotenv.config()

import { myDataSource } from "./src/app-data-source"

// establish database connection
myDataSource
.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
})

const app = express();
app.use(express.json());

// 🏚️ Default Route
// This is the Default Route of the API
app.get('/', async (req:Request ,res:Response) => {
    res.json({ message: 'Hello from Express' });
});

// register routes
app.get("/users", async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(User).find()
    res.json(users)
})

// app.get("/users/:id", async function (req: Request, res: Response) {
//     const results = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     return res.send(results)
// })

app.post("/users", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
})

// app.put("/users/:id", async function (req: Request, res: Response) {
//     const user = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     myDataSource.getRepository(User).merge(user, req.body)
//     const results = await myDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.delete("/users/:id", async function (req: Request, res: Response) {
//     const results = await myDataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })



const port = process.env.PORT;
app.listen(port , () => {
    console.log(`Express server is running on port ${process.env.PORT}`);
});