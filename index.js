const express = require ('express');
const connectDb = require('./src/config/db.js');

require ("dotenv").config();

const routes = require("./src/resources/users/routes/index")

const app = express();

connectDb();

app.use (express.json());
app.use ("/", routes);




app.listen (process.env.PORT, () =>{
console.log (`escuchando en puerto ${process.env.PORT}`)
})
