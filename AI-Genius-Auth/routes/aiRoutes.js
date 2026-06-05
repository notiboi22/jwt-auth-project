const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get(
  "/text",
  protect,
  (req, res) => {
    res.json({
      message: "AI Text Generation Access Granted",
      user: req.user,
    });
  }
);

router.get(
  "/image",
  protect,
  authorize("Admin", "Premium_User"),
  (req, res) => {
    res.json({
      message: "AI Image Generation Access Granted",
    });
  }
);

module.exports = router;