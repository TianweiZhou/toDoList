exports.deMirrorSteps = (steps) => {
    try {
        const deMirroredSteps = steps.map(s => {
            return {
                title: s.title,
                notes: s.notes,
                stepsArr: s.workflow
            }
        });
        return deMirroredSteps;
    } catch (error) {
        throw new Error(error);
    }
};