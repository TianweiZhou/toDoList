const { DateTime } = require('Luxon');
const Reminder = require('../models/reminder');
const ReminderHelper = require('../utils/reminderHelper');

exports.getAllReminders = async () => {
    try {
        const reminders = await Reminder.find().populate('stepsID').select('-_v');
        if (reminders) {
            //create de-mirror structure 
            const deMirroredReminders = ReminderHelper.deMirrorReminder(reminders);
            return { reminders: deMirroredReminders };
        } else {
            return { reminders: [] };
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.createReminder = async (firstName, lastName, DOB, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail, title, notes, dueDateStr, stepsID) => {
    try {
        const customer = {
            firstName: firstName,
            lastName: lastName,
            DOB: DOB,
            primaryPhone: primaryPhone,
            secondaryPhone: secondaryPhone,
            primaryEmail: primaryEmail,
            secondaryEmail: secondaryEmail
        };
        const newReminder = new Reminder({
            title: title,
            notes: notes,
            customer: customer,
            createDateTime: DateTime.local().setZone('America/Toronto'),
            dueDateTime: DateTime.fromISO(dueDateStr, { zone: 'America/Toronto' }).toISO(),
            stepsID: stepsID
        });
        await newReminder.save();
        return { msg: 'Reminder create successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateReminderByID = async (reminderID, firstName, lastName, DOB, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail, title, notes, dueDateStr, stepsID) => {
    try {
        let additionalMsg = '';//using for steps update
        const reminder = await Reminder.findById(reminderID).select('-_v');
        if (reminder) {
            //update customer info
            const updateCustomer = {
                firstName: firstName,
                lastName: lastName,
                DOB: DOB,
                primaryPhone: primaryPhone,
                secondaryPhone: secondaryPhone,
                primaryEmail: primaryEmail,
                secondaryEmail: secondaryEmail
            };
            reminder.customer = updateCustomer;
            //update reminder info
            reminder.title = title;
            reminder.notes = notes;
            reminder.dueDateTime = DateTime.fromISO(dueDateStr, { zone: 'America/Toronto' });
            //update steps type
            if (stepsID != reminder.stepsID.toString()) {
                reminder.stepsID = stepsID;
                reminder.stepIndex = 0;
                reminder.isDone = false;
                additionalMsg = ', status auto reset because of steps-type changing'
            }
            await reminder.save();
            return { msg: 'Reminder update successfully' + additionalMsg };
        } else {
            throw new Error('Reminder not fond');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteReminderByID = async (reminderID) => {
    try {
        await Reminder.findByIdAndDelete(reminderID);
        return { msg: 'Reminder delete successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getReminderByID = async (reminderID) => {
    try {
        const reminder = await Reminder.findById(reminderID).select('-_v');
        if(reminder){
            //create de-mirror structure 
            const deMirroredReminder = ReminderHelper.deMirrorReminder([reminder]);
            return { reminder: deMirroredReminder };
        }else{
            return { reminder: [] };
        }
    } catch (error) {
        throw new Error(error.message);
    }
};