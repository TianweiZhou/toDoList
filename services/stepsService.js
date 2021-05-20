const Steps = require('../models/steps');
const StepsHelper = require('../utils/stepsHelper');

exports.getAllSteps = async () => {
    try {
        const steps = await Steps.find().select('title notes workflow');
        //create de-mirror structure 
        if (steps) {
            const deMirroredSteps = StepsHelper.deMirrorSteps(steps);
            return { steps: deMirroredSteps };
        } else {
            return { steps: [] };
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.createSteps = async (title, notes, workflow) => {
    try {
        const newSteps = new Steps({
            title: title,
            notes: notes ? notes : '',
            workflow: workflow
        });
        await newSteps.save();
        return { msg: 'Steps create successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateStepsByID = async (stepsID, title, notes, workflow) => {
    try {
        const steps = await Steps.findById(stepsID).select('-_v');
        if (steps) {
            steps.title = title ? title : '';
            steps.notes = notes ? notes : '';
            steps.workflow = workflow;
            await steps.save();
            return { msg: 'Steps update successfully' };
        } else {
            throw new Error('Steps not found');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteStepsByID = async (stepsID) => {
    try {
        await Steps.findByIdAndDelete(stepsID);
        return { msg: 'Steps delete successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getStepsByID = async (stepsID) => {
    try {
        const steps = await Steps.findById(stepsID).select('-_v');
        //create de-mirror structure
        if (steps) {
            const deMirroredSteps = StepsHelper.deMirrorSteps([steps]);
            return { steps: deMirroredSteps };
        } else {
            return { steps: [] };
        }
    } catch (error) {
        throw new Error(error.message);
    }
};