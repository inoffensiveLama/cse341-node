const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./db/connect");
const app = express();

const port = process.env.port || 8080;

app
    .use(bodyParser.json())
    .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
    })
    .use("/", require("./routes"));


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log("MongoDB connected and listening at port " + (port));
    }
});

