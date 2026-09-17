const express = require("express");
const router = express.Router();

const crypto = require("crypto");
const validateText = require("../middleware/validateText.js");

// SHA-256 route
router.post("/sha256", validateText, (req,res) => {
    const text = req.body.text;
    const hash = crypto
                .createHash("sha256")
                .update(text)
                .digest("hex");

    res.json({
        algorithm: "SHA-256",
        hash: hash
    })
})

// SHA-512 route
router.post("/sha512", validateText, (req, res) => {
    const text = req.body.text;
    const hash = crypto
        .createHash("sha512")
        .update(text)
        .digest("hex");

    res.json({
        algorithm: "SHA-512",
        hash: hash
    });    
}); 

module.exports = router;