const testController = require("../controllers/testController");
const routes = require("express").Router();

routes.get("/", testController.testRoute);

module.exports = routes;