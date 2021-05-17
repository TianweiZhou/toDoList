exports.deMirrorCustomer = (customers) => {
    try {
        const deMirroredCustomer = customers.map(c => {
            return {
                first: c.firstName,
                last: c.lastName,
                birth: c.DOB,
                phone: c.primaryPhone,
                addPhone: c.secondaryPhone,
                email: c.primaryEmail,
                addEmail: c.secondaryEmail
            }
        });
        return deMirroredCustomer;
    } catch (error) {
        throw new Error(error);
    }
};