"use strict";
exports.__esModule = true;
var mysql = require("mysql2/promise");
var dotenv = require("dotenv");
dotenv.config();
exports["default"] = mysql.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
