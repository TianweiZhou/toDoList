const mongoose = require('mongoose');

let ReminderSchema = new mongoose.Schema({
    title: { type: String },
    notes: { type: String },
    customerID: { type: mongoose.ObjectId, require: true, ref: 'customer' },
    createDateTime: { type: Date },
    dueDateTime: { type: Date },
    currentStatus: { type: Number }
});

const Reminder = mongoose.model('reminder', ReminderSchema, 'Reminder');
module.exports = Reminder;