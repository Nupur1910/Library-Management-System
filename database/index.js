const { application } = require("express");

const pgp = require("pg-promise")();
const connectionString = "postgresql://postgres:tanay123@localhost:5432/final";

const db = pgp(connectionString);
module.exports = db;
