const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/:name"
router.route("/:name")
  .get(userController.profile)

// Matches with "/api/user/:name/watched/:movieId"
router.route("/:name/watched/:movieId")
  .post(userController.watched)

// Matches with "/api/user/:name/wanted/:movieId"
router.route("/:name/wanted/:movieId")
  .post(userController.wanted)

module.exports = router;