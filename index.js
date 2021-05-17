const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();

const connectDB = require('./database/connectDB');
const RateLimiter = require('./middlewares/rateLimiter');
const CustomerRoute = require('./routes/customerRoute');
const ReminderRoute = require('./routes/reminderRoute');
const StepsRoute = require('./routes/stepsRoute');

try {
    connectDB;

    app.use(cors());
    app.use(RateLimiter.getLimiter());
    app.use(express.json({ limit: '5mb' }));
    app.use(express.urlencoded({ extended: true }));

    app.use('/customer', CustomerRoute);
    app.use('/reminder', ReminderRoute);
    app.use('/steps', StepsRoute);

    app.listen(() => {
        console.log(`listening at ${process.env.PORT || 4000}`);
    })
} catch (err) {
    console.log(err.message);
}