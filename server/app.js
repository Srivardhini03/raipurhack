const express = require('express');

const app = express();



//================= Middlewares ===================

app.use(express.json());

//================= User routes =================

//app.use('/api/v1/users', userRouter);

module.exports = app;