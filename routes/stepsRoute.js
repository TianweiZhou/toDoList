const express = require('express');
const router = express.Router();

const stepsService = require('../services/stepsService');
const stepsValidator = require('../validator/stepsValidator');

router.get('/',
    async (req, res) => {
        try {
            const result = await stepsService.getAllSteps();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

router.post('/',
    stepsValidator.validateCreateSteps,
    async (req, res) => {
        try {
            const title = req.body.title;
            const notes = req.body.notes;
            const workflow = req.body.stepsArr;
            const result = await stepsService.createSteps(title, notes, workflow);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

router.put('/',
    stepsValidator.validateUpdateSteps,
    async (req, res) => {
        try {
            const stepsID = req.body.stepsID;
            const title = req.body.title;
            const notes = req.body.notes;
            const workflow = req.body.stepsArr;
            const result = await stepsService.updateStepsByID(stepsID, title, notes, workflow);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

router.delete('/',
    stepsValidator.validateDeleteSteps,
    async (req, res) => {
        try {
            const stepsID = req.query.stepsID;
            const result = await stepsService.deleteStepsByID(stepsID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

router.get('/:stepsID',
    stepsValidator.validateGetStepsByID,
    async (req, res) => {
        try {
            const stepsID = req.params.stepsID;
            const result = await stepsService.getStepsByID(stepsID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

module.exports = router;