const router = require("express").Router();
const Routes = require("./headlines");

// Book routes
router.use("/headlines", Routes);

module.exports = router;
