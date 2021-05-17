const mongoose = require('mongoose');

let StepsSchema = new mongoose.Schema({
    title: { type: String, require: true },
    notes: { type: String },
    workflow: [String]
});

const Steps = mongoose.model('steps', StepsSchema, 'Steps');
module.exports = Steps;