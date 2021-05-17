const mongoose = require('mongoose');

let ReminderSchema = new mongoose.Schema({
    title: { type: String },
    notes: { type: String },
    customerID: { type: mongoose.ObjectId, require: true, ref: 'customer' },
    createDateTime: { type: Date },
    dueDateTime: { type: Date },
    stepIndex: { type: Number },
    steps: { type: mongoose.ObjectId, require: true, ref: 'steps' },
    isDone: { type: Boolean }
});

const Reminder = mongoose.model('reminder', ReminderSchema, 'Reminder');
module.exports = Reminder;