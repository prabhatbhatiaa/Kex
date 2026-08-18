const express = require('express');
const app = express();
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

app.listen(PORT, () => {
    console.log(`Kex API running on port ${PORT}`)
})