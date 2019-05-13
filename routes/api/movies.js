const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");
const reviewController = require("../../controllers/reviewController");

// Matches with "/api/movies"
router.route("/")
  .get(moviesController.discover)

// Matches with "/api/movies/search/:name"
router.route("/search/:name")
  .get(moviesController.search)

// Matches with "/api/movies/:id"
router
  .route("/:id")
  .get(moviesController.details)

// Matches with "/api/movies/review"
router
  .route("/review")
  .post(reviewController.create)

module.exports = router;