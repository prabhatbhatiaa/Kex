const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());
const PORT=3000;

// First endpoint
app.get('/', (req,res) => {
    res.json({
        message: "This is the Kex API"
    });
});

// API algos discovery endpoint
app.get("/api/v1/algorithms", (req,res) => {
    res.json({
        hashing: ["SHA-256", "SHA-512"],
        encryption: ["AES-256-GCM", "XOR"],
        authentication: ["HMAC-SHA256"],
        encoding: ["Base64"]
    });
});

// SHA-256 hashing endpoint
app.post("/api/v1/hash/sha256", (req,res) => {
    const text = req.body.text;
    if (typeof text !== "string" || text.length === 0) {
        return res.status(400).json({
            error: "Text is required and should be a non empty string"
        });
    } 
    const hash = crypto
                .createHash("sha256")
                .update(text)
                .digest("hex");

    res.json({
        algorithm: "SHA-256",
        hash: hash
    })
})

// SHA-512 hashing endpoint [based on SHA256]
app.post("/api/v1/hash/sha512", (req,res) => {
    const text =  req.body.text;
    if (typeof text !== "string" || text.length === 0) {
        return res.status(400).json({
            error: "Text is required and should be a non empty string"
        });
    }
    const hash = crypto
                .createHash("sha512")
                .update(text)
                .digest("hex");
    
    res.json({
        algorithm: "SHA-512",
        hash: hash
    })
})

app.listen(PORT, () => {
    console.log(`Kex API is running on port ${PORT}`)
});