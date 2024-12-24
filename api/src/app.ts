
import express , {Request , Response,NextFunction} from 'express';
import V1Routes from './routes/v1/index'
import dotenv from 'dotenv'
dotenv.config()
import httpStatus from 'http-status';
import ApiError from './utils/apiError'
import { myDataSource } from "./app-data-source"
import { errorHandler } from './middlewares/error.middleware';

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
app.get('/', async (req:Request ,res:Response) => {
    res.json({ message: 'Hello from Express' });
});

app.use('/v1', V1Routes);

// send back a 404 error for any unknown api request
app.use((req:Request, res:Response, next:NextFunction) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });
app.use(errorHandler);


const port = process.env.PORT;
app.listen(port , () => {
    console.log(`Express server is running on port ${process.env.PORT}`);
});