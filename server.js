const express = require('express');

const hashRoutes = require("./src/routes/hashRoutes.js");

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

// Router for hashing endpoints
app.use("/api/v1/hash", hashRoutes);

app.listen(PORT, () => {
    console.log(`Kex API is running on port ${PORT}`)
});