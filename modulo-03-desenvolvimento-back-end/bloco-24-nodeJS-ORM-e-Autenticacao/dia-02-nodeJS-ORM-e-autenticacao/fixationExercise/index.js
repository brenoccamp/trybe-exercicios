const express = require('express');
const employeesRouter = require('./routers/employeesRouter');
const userBooksRouter = require('./routers/userBooksRouter');
const error = require('./controllers/error');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/employees', employeesRouter);
app.use('/usersbooks', userBooksRouter);

app.use(error);

app.listen(PORT, () => console.log(`Runing on port: ${PORT}`));

module.exports = app;