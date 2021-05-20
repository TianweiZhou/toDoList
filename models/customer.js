const mongoose = require('mongoose');

let CustomerSchema = new mongoose.Schema({
    _id: false,
    firstName: { type: String },
    lastName: { type: String },
    DOB: { type: String },
    primaryPhone: { type: String },
    secondaryPhone: { type: String },
    primaryEmail: { type: String },
    secondaryEmail: { type: String }
});

module.exports = CustomerSchema;