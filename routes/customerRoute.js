const express = require('express');
const router = express.Router();

const customerService = require('../services/customerService');

router.get('/',
    async (req, res) => {
        try {
            const result = await customerService.getAllCustomers();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

router.post('/',
    async (req, res) => {
        try {
            const firstName = req.body.first;
            const lastName = req.body.last;
            const DOB = req.body.birth;
            const primaryPhone = req.body.phone;
            const secondaryPhone = req.body.addPhone;
            const primaryEmail = req.body.email;
            const secondaryEmail = req.body.addEmail;
            const result = await customerService.createCustomer(firstName, lastName, DOB, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

router.put('/',
    async (req, res) => {
        try {
            const customerID = req.body.customerID;
            const firstName = req.body.first;
            const lastName = req.body.last;
            const DOB = req.body.birth;
            const primaryPhone = req.body.phone;
            const secondaryPhone = req.body.addPhone;
            const primaryEmail = req.body.email;
            const secondaryEmail = req.body.addEmail;
            const result = await customerService.updateCustomerByID(customerID, DOB, firstName, lastName, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

router.delete('/',
    async (req, res) => {
        try {
            const customerID = req.body.customerID;
            const result = await customerService.deleteCustomerByID(customerID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

router.get('/:customerID',
    async (req, res) => {
        try {
            const customerID = req.params.customerID;
            const result = await customerService.getCustomerByID(customerID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: err.message }] });
        }
    });

module.exports = router;