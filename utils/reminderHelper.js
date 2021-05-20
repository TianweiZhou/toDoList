exports.deMirrorReminder = (reminders) => {
    try {
        const deMirroredReminder = reminders.map(r => {
            return {
                reminderID: r._id,
                title: r.title,
                notes: r.notes,
                createAt: r.createDateTime,
                dueDate: r.dueDateTime,
                currentStep: r.stepIndex,
                isDone: r.isDone,
                steps: {
                    stepID: r.stepsID ? r.stepsID._id : '',
                    title: r.stepsID ? r.stepsID.title : '',
                    notes: r.stepsID ? r.stepsID.notes : '',
                    stepsArr: r.stepsID ? r.stepsID.workflow : ''
                },
                customer: {
                    first: r.customer.firstName,
                    last: r.customer.lastName,
                    birth: r.customer.DOB,
                    phone: r.customer.primaryPhone,
                    addPhone: r.customer.secondaryPhone,
                    email: r.customer.primaryEmail,
                    addEmail: r.customer.secondaryEmail
                }
            }
        });
        return deMirroredReminder;
    } catch (error) {
        throw new Error(error.message);
    }
};