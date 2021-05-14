const express = require('express');
const router = express.Router();

const reminderService = require('../services/reminderService');

router.get('/',
    async (req, res) => {
        try {
            const result = await reminderService.getAllReminders();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

router.post('/',
    async (req, res) => {
        try {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const DOB = req.body.DOB;
            const primaryPhone = req.body.primaryPhone;
            const secondaryPhone = req.body.secondaryPhone;
            const primaryEmail = req.body.primaryEmail;
            const secondaryEmail = req.body.secondaryEmail;
            const result = await reminderService.createReminder(firstName, lastName, DOB, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

router.put('/',
    async (req, res) => {
        try {
            const customerID = req.body.customerID;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const DOB = req.body.DOB;
            const primaryPhone = req.body.primaryPhone;
            const secondaryPhone = req.body.secondaryPhone;
            const primaryEmail = req.body.primaryEmail;
            const secondaryEmail = req.body.secondaryEmail;
            const result = await reminderService.updateReminderByID(customerID, DOB, firstName, lastName, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

router.delete('/',
    async (req, res) => {
        try {
            const customerID = req.body.customerID;
            const result = await reminderService.deleteReminderByID(customerID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

router.get('/:customerID',
    async (req, res) => {
        try {
            const customerID = req.params.customerID;
            const result = await reminderService.getReminderByID(customerID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

module.exports = router;