const express = require('express');
const cors = require('cors')
const app = express();
const helmet = require("helmet");
require('dotenv').config();

const connectDB = require('./database/connectDB');
const RateLimiter = require('./middlewares/rateLimiter');
const ReminderRoute = require('./routes/reminderRoute');
const StepsRoute = require('./routes/stepsRoute');
const PORT = process.env.PORT || 4000;

try {
    connectDB;

    app.use(cors());
    app.use(helmet());
    app.use(RateLimiter.getLimiter());
    app.use(express.json({ limit: '5mb' }));
    app.use(express.urlencoded({ extended: true }));

    app.use('/reminder', ReminderRoute);
    app.use('/steps', StepsRoute);

    app.listen(PORT, () => {
        console.log(`listening at ${PORT}`);
    })
} catch (err) {
    console.log(err.message);
}