const { body, query, param, validationResult } = require('express-validator');

exports.validateCreateSteps = [
    body('title')
        .isString().withMessage('Title must be a string')
        .isLength({ min: 1, max: 50 }).withMessage('Title should has more than 1 chars and less than 50 chars')
        .trim(),
    body('notes')
        .optional({ nullable: true, checkFalsy: true })
        .isLength({ max: 500 }).withMessage('Notes should has less than 500 chars')
        .trim(),
    body('stepsArr')
        .isArray().withMessage('Workflow must be an array')
        .isLength({ min: 1, max: 30 }).withMessage('Workflow should has more than 1 step and less than 30 steps'),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.status(400).json({ err: InvalidErr.array() });
        }
        next();
    }
]

exports.validateUpdateSteps = [
    body('stepsID')
        .isMongoId().withMessage('Invalid ID'),
    body('title')
        .isString().withMessage('Title must be a string')
        .isLength({ min: 1, max: 50 }).withMessage('Title should has more than 1 chars and less than 50 chars')
        .trim(),
    body('notes')
        .optional({ nullable: true, checkFalsy: true })
        .isLength({ max: 500 }).withMessage('Notes should has less than 500 chars')
        .trim(),
    body('stepsArr')
        .isArray().withMessage('Workflow must be an array')
        .isLength({ min: 1, max: 30 }).withMessage('Workflow should has more than 1 step and less than 30 steps'),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.status(400).json({ err: InvalidErr.array() });
        }
        next();
    }
]

exports.validateGetStepsByID = [
    param('stepsID')
        .isMongoId().withMessage('Invalid ID'),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.status(400).json({ err: InvalidErr.array() });
        }
        next();
    }
]

exports.validateDeleteSteps = [
    query('stepsID')
        .isMongoId().withMessage('Invalid ID'),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.status(400).json({ err: InvalidErr.array() });
        }
        next();
    }
]