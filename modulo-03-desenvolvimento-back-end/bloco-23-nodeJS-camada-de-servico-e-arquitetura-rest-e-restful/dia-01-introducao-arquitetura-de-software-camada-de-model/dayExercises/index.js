const express = require('express');
const userRouter = require('./routers/userRouter');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));