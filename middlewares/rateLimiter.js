const rateLimit = require("express-rate-limit");

exports.limiter = () => {
    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minutes
        max: 100 // limit each IP to 100 requests per windowMs
    });
    return limiter;
};