const validateText = (req,res,next) => {
    const text = req.body.text;

    if (typeof text !== "string" || text.length === 0) {
        return res.status(400).json({
            error: "Text is required and should be a non empty string"
        });
    }
    next();
}
module.exports = validateText;