const Customer = require('../models/customer');

exports.getAllCustomers = async () => {
    try {
        const customers = await Customer.find();
        return { customers: customers };
    } catch (error) {
        throw new Error(error);
    }
};

exports.createCustomer = async (firstName, lastName, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail) => {
    try {
        const newCustomer = new Customer({
            firstName: firstName ? firstName : '',
            lastName: lastName ? lastName : '',
            primaryPhone: primaryPhone ? primaryPhone : '',
            secondaryPhone: secondaryPhone ? secondaryPhone : '',
            primaryEmail: primaryEmail ? primaryEmail : '',
            secondaryEmail: secondaryEmail ? secondaryEmail : '',
        });
        await newCustomer.save();
        return { msg: 'Customer create successfully' };
    } catch (error) {
        throw new Error(error);
    }
};

exports.updateCustomerByID = async (customerID, firstName, lastName, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail) => {
    try {
        const customer = await Customer.findById(customerID);
        customer.firstName = firstName ? firstName : '';
        customer.lastName = lastName ? lastName : '';
        customer.primaryPhone = primaryPhone ? primaryPhone : '';
        customer.secondaryPhone = secondaryPhone ? secondaryPhone : '';
        customer.primaryEmail = primaryEmail ? primaryEmail : '';
        customer.secondaryEmail = secondaryEmail ? secondaryEmail : '';
        await customer.save();
        return { msg: 'Customer update successfully' };
    } catch (error) {
        throw new Error(error);
    }
};

exports.deleteCustomerByID = async (customerID) => {
    try {
        await Customer.findByIdAndDelete(customerID);
        return { msg: 'Customer delete successfully' };
    } catch (error) {
        throw new Error(error);
    }
};

exports.getCustomerByID = async (customerID) => {
    try {
        const customer = await Customer.findById(customerID);
        return { customer: customer };
    } catch (error) {
        throw new Error(error);
    }
};