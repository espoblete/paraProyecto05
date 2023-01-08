const express = require ('express');
const connectDb = require('./src/config/db.js');
const cors = require("cors");
const app = express();

require ("dotenv").config();
const routes = require("./src/resources/users/routes/rutes")

connectDb();

app.use (cors());
app.use (express.json());
app.use ("/", routes);

app.listen (process.env.PORT, () => {
console.log (`escuchando en puerto ${process.env.PORT}`)
});
