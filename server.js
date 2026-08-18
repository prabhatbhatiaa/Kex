const express = require('express');
const app = express();
const PORT=3000;

// First endpoint
app.get('/', (req,res) => {
    res.json({
        message: "This is the Kex API"
    });
});

app.listen(PORT, () => {
    console.log(`Kex API running on port ${PORT}`)
})