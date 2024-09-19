const professionalController = {}
const mongodb = require("../db/connect");


professionalController.getData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection("user").find();
    result.toArray().then((lists) => {
        console.log(JSON.stringify(lists[0]));
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists[0]);
    });
};



module.exports = professionalController