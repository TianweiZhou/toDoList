const Reminder = require('../models/reminder');

exports.getAllReminders = async () => {
    try {
        const reminders = await Reminder.find();
        return { reminders: reminders };
    } catch (error) {
        throw new Error(error);
    }
};

exports.createReminder = async (firstName, lastName, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail) => {
    try {
        const newReminder = new Reminder({
            firstName: firstName ? firstName : '',
            lastName: lastName ? lastName : '',
            primaryPhone: primaryPhone ? primaryPhone : '',
            secondaryPhone: secondaryPhone ? secondaryPhone : '',
            primaryEmail: primaryEmail ? primaryEmail : '',
            secondaryEmail: secondaryEmail ? secondaryEmail : '',
        });
        await newReminder.save();
        return { msg: 'Reminder create successfully' };
    } catch (error) {
        throw new Error(error);
    }
};

exports.updateReminderByID = async (reminderID, firstName, lastName, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail) => {
    try {
        const reminder = await Reminder.findById(reminderID);
        reminder.firstName = firstName ? firstName : '';
        reminder.lastName = lastName ? lastName : '';
        reminder.primaryPhone = primaryPhone ? primaryPhone : '';
        reminder.secondaryPhone = secondaryPhone ? secondaryPhone : '';
        reminder.primaryEmail = primaryEmail ? primaryEmail : '';
        reminder.secondaryEmail = secondaryEmail ? secondaryEmail : '';
        await reminder.save();
        return { msg: 'Reminder update successfully' };
    } catch (error) {
        throw new Error(error);
    }
};

exports.deleteReminderByID = async (reminderID) => {
    try {
        await Reminder.findByIdAndDelete(reminderID);
        return { msg: 'Reminder delete successfully' };
    } catch (error) {
        throw new Error(error);
    }
};

exports.getReminderByID = async (reminderID) => {
    try {
        const reminder = await Reminder.findById(reminderID);
        return { reminder: reminder };
    } catch (error) {
        throw new Error(error);
    }
};