const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use("/", require("./routes"));

const port = 8080;

app.listen(process.env.port || port);
console.log("Web Server is listening at port " + (process.env.port || port));