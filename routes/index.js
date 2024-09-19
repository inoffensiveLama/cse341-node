//const testController = require("../controllers/testController");
const professionalController = require("../controllers/professionalController");
const routes = require("express").Router();

//routes.get("/", testController.testRoute);

routes.get("/professional", professionalController.getData);

module.exports = routes;