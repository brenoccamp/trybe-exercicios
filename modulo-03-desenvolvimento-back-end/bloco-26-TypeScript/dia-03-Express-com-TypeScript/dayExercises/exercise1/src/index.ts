import express, { Express } from 'express';
import error from './middlewares/error';
import userRoutes from './routers/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/users', userRoutes);

app.use(error);

app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));