const mongoose = require('mongoose');
const CustomerSchema = require('./customer');

let ReminderSchema = new mongoose.Schema({
    title: { type: String },
    notes: { type: String },
    customer: CustomerSchema,
    createDateTime: { type: Date },
    dueDateTime: { type: Date },
    stepIndex: { type: Number, default: 0 },
    stepsID: { type: mongoose.ObjectId, require: true, ref: 'steps' },
    isDone: { type: Boolean, default: false }
});

const Reminder = mongoose.model('reminder', ReminderSchema, 'Reminder');
module.exports = Reminder;