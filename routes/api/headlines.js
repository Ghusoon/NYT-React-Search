const router = require("express").Router();
const articalesController = require("../../controllers/headline");

router.route("/")
  .get(articalesController.findAll)

router
  .route("/:id")
  .put(articalesController.update)
  .delete(articalesController.delete);

module.exports = router;
