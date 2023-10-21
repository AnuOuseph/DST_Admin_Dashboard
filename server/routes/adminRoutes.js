const express = require("express");

const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent, updateEventOutcome } = require('../controllers/eventControllers');
const { createBettingSession, getAllBettingSessions, updateBettingSession, deleteBettingSession, getCurrentBets } = require('../controllers/bettingSessionControllers');
const { createAdmin } = require('../controllers/adminControllers');

const router = express.Router();

//events
router.post('/createEvent', createEvent);
router.get('/getAllEvents', getAllEvents);
router.get('/getEventById/:id', getEventById);
router.patch('/updateEvent/:id', updateEvent);
router.delete('/deleteEvent/:id', deleteEvent);
router.patch('/updateEventOutcome/:id', updateEventOutcome);

//bets
router.post('/createBettingSession', createBettingSession);
router.get('/getAllBettingSessions', getAllBettingSessions);
router.patch('/updateBettingSession/:id', updateBettingSession);
router.delete('/deleteBettingSession/:id', deleteBettingSession);
router.get('/getCurrentBets', getCurrentBets);

//admin
router.post('/createAdmin', createAdmin);

module.exports = router;