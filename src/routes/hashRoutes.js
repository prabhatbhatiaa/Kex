const express = require("express");
const router = express.Router();

const crypto = require("crypto");
const validateText = require("../middleware/validateText.js");

const { sha256, sha512 } = require("../controllers/hashController.js")

// SHA-256 route
router.post("/sha256", validateText, sha256)

// SHA-512 route
router.post("/sha512", validateText, sha512);

module.exports = router;