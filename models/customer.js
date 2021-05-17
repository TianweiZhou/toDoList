const mongoose = require('mongoose');

let CustomerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    DOB: { type: String },
    primaryPhone: { type: String },
    secondaryPhone: { type: String },
    primaryEmail: { type: String },
    secondaryEmail: { type: String }
});

const Customer = mongoose.model('customer', CustomerSchema, 'Customers');
module.exports = Customer;