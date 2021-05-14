const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
        console.log("mongoDB connected");
    } catch (err) {
        console.log("unable to connect - " + err.message);
        process.exit();
    }
}

module.exports = connectDB();