const crypto = require('crypto');

const sha256 = (req,res) => {
    const text = req.body.text;
    const hash = crypto
                .createHash("sha256")
                .update(text)
                .digest("hex");

    res.json({
        algorithm: "SHA-256",
        hash: hash
    })
};

const sha512 = (req,res) => {
    const text = req.body.text;
    const hash = crypto
        .createHash("sha512")
        .update(text)
        .digest("hex");

    res.json({
        algorithm: "SHA-512",
        hash: hash
    });   
}

module.exports = {
    sha256,
    sha512
};