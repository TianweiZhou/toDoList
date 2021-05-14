const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const connectDB = require('./database/connectDB');
const CustomerRoute = require('./routes/customerRoute');
const ReminderRoute = require('./routes/reminderRoute');

try {
    connectDB

    app.use(cors());
    app.use(express.json({ limit: '2mb' }));
    app.use(express.urlencoded({ extended: true }));

    //app.use('/customer', CustomerRoute);
    //app.use('/reminder', ReminderRoute);

    app.listen(PORT, () => {
        console.log(`listening at ${PORT}`);
    })
} catch (err) {
    console.log(err.message);
}