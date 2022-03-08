const express = require('express');
const employeesRouter = require('./routers/employeesRouter');
const error = require('./controllers/error');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/employees', employeesRouter);

app.use(error);

app.listen(PORT, () => console.log(`Runing on port: ${PORT}`));

module.exports = app;