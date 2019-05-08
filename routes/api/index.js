const router = require("express").Router();
const bookRoutes = require("./movies");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
