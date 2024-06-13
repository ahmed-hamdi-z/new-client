// this page controller take all the routes from controllers 

const express = require("express");
const router = express.Router();


const { getHi } = require('../controllers/allControllers')

router.route("/hi").get(getHi)

module.exports = router;