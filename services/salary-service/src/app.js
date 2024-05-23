require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Prisma_connection = require("../prisma/db_query/db_query")

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression")

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors("*"));
app.use(compression());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


await Prisma_connection.connect();
app.listen(port)
await Prisma_connection.disconnect();