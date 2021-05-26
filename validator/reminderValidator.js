const { body, query, param, validationResult } = require('express-validator');

exports.validateCreateReminder = [
    body('first')
        .isLength({ min: 1, max: 50 }).withMessage('First name should have more than 1 chars and less than 50 chars')
        .trim(),
    body('last')
        .optional({ nullable: true, checkFalsy: true })
        .isLength({ min: 1, max: 50 }).withMessage('Last name should have more than 1 chars and less than 50 chars')
        .trim(),
    body('birth')
        .optional({ nullable: true, checkFalsy: true })
        .isDate().withMessage('Invalid birthday')
        .trim(),
    body('phone')
        .optional({ nullable: true, checkFalsy: true })
        .isMobilePhone(['en-CA', 'en-US']).withMessage('Invalid phone number'),
    body('addPhone')
        .optional({ nullable: true, checkFalsy: true })
        .isMobilePhone(['en-US', 'en-CA']).withMessage('Invalid additional phone number'),
    body('email')
        .optional({ nullable: true, checkFalsy: true })
        .isEmail().withMessage('Invalid email')
        .normalizeEmail(),
    body('addEmail')
        .optional({ nullable: true, checkFalsy: true })
        .isEmail().withMessage('Invalid additional email'),
    body('title')
        .optional({ nullable: true, checkFalsy: true })
        .isLength({ max: 300 }).withMessage('Title should have less than 300 chars')
        .trim(),
    body('notes')
        .optional({ nullable: true, checkFalsy: true })
        .isLength({ max: 1000 }).withMessage('Notes should have less than 1000 chars'),
    body('due')
        .optional({ nullable: true, checkFalsy: true })
        .isDate().withMessage('Invalid due date'),
    body('stepsID')
        .isMongoId().withMessage('Invalid steps'),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.status(400).json({ err: InvalidErr.array() });
        }
        next();
    }
]

exports.validateUpdateReminder = [
    body('reminderID')
        .isMongoId().withMessage('Invalid reminder ID'),
    body('first')
        .isLength({ min: 1, max: 50 }).withMessage('First name should have more than 1 chars and less than 50 chars')
        .trim(),
    body('last')
        .optional({ nullable: true, checkFalsy: true })
        .isLength({ min: 1, max: 50 }).withMessage('Last name should have more than 1 chars and less than 50 chars')
        .trim(),
    body('birth')
        .optional({ nullable: true, checkFalsy: true })
        .isDate().withMessage('Invalid birthday')
        .trim(),
    body('phone')
        .optional({ nullable: true, checkFalsy: true })
        .isMobilePhone(['en-CA', 'en-US']).withMessage('Invalid phone number'),
    body('addPhone')
        .optional({ nullable: true, checkFalsy: true })
        .isMobilePhone(['en-US', 'en-CA']).withMessage('Invalid additional phone number'),
    body('email')
        .optional({ nullable: true, checkFalsy: true })
        .isEmail().withMessage('Invalid email')
        .normalizeEmail(),
    body('addEmail')
        .optional({ nullable: true, checkFalsy: true })
        .isEmail().withMessage('Invalid additional email'),
    body('title')
        .optional({ nullable: true, checkFalsy: true })
        .isLength({ max: 300 }).withMessage('Title should have less than 300 chars')
        .trim(),
    body('notes')
        .optional({ nullable: true, checkFalsy: true })
        .isLength({ max: 1000 }).withMessage('Notes should have less than 1000 chars'),
    body('due')
        .optional({ nullable: true, checkFalsy: true })
        .isDate().withMessage('Invalid due date'),
    body('stepsID')
        .isMongoId().withMessage('Invalid steps'),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.status(400).json({ err: InvalidErr.array() });
        }
        next();
    }
]

exports.validateGetReminderByID = [
    param('reminderID')
        .isMongoId().withMessage('Invalid reminder ID'),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.status(400).json({ err: InvalidErr.array() });
        }
        next();
    }
]

exports.validateDeleteReminderByID = [
    query('reminderID')
        .isMongoId().withMessage('Invalid reminder ID'),
    (req, res, next) => {
        const InvalidErr = validationResult(req);
        if (!InvalidErr.isEmpty()) {
            return res.status(400).json({ err: InvalidErr.array() });
        }
        next();
    }
]