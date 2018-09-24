const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Timer model
const Timer = require('../../models/Timers');

// Validation
const validateTimersInput = require('../../validation/timers');

// @route   GET api/timers/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'timers Works' }));

// @route   GET api/timers
// @desc    Get timers
// @access  Public
router.get('/', (req, res) => {
  Timer.find()
    .sort({ date: -1 })
    .then(timers => res.json(timers))
    .catch(err => res.status(404).json({ notimersfound: 'No timers found' }));
});


// @route   POST api/timers
// @desc    Create timers
// @access  Private
router.post(
  '/',
  (req, res) => {
    const { errors, isValid } = validateTimersInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newTimer = new Timer({
      title: req.body.title,
      project: req.body.project,
      elapsed: req.body.elapsed,
      runningSince: req.body.runningSince,
      editFormOpen: req.body.editFormOpen
    });

    newTimer.save().then(timer => res.json(timer));
  }
);

// @route   POST api/timers/start
// @desc    update start time - need id of 
//          timer to set `runningSince`
// @access  Public
router.post(
  '/start/',
  (req, res) => {
    // res.json({ msg: 'req.params.timer_id' })
    TimerFields = {};
    //if (req.body.runningSince) 
    TimerFields.runningSince = Date.now();

    Timer.findOneAndUpdate(
      { _id: req.body._id },
      { $set: TimerFields },
      { new: true }
    )
    .then(timer => res.json(timer))
      .catch(err => res.status(404).json(err));
  }
);
// @route   POST api/timers/stop
// @desc    update stop time - need id of 
//          timer to set `elapsed`
// @access  Public
router.post(
  '/stop/',
  (req, res) => {
    // res.json({ msg: req.body._id })
    Timer.findOne({ _id: req.body._id })
    .then(timer => {
      TimerFields = {};
      const now = Date.now();
      TimerFields.runningSince = timer.runningSince;
      const lastElapsed = now - timer.runningSince;
      //res.json({ msg: lastElapsed })
      TimerFields.elapsed = lastElapsed;
      //res.json({ msg: TimerFields })
      // res.json(timer)
      Timer.findOneAndUpdate(
        { _id: req.body._id },
        { $set: TimerFields },
        { new: true }
      )
      .then(timer => res.json(timer))
        .catch(err => res.status(404).json(err));
      })
    .catch(err => res.status(404).json({ notimersfound: 'No timers found' }));
    
  }
);

// @route   POST api/timers/:timer_id
// @desc    Update timer
// @access  Public
router.post(
  '/:timer_id',
  (req, res) => {
    //res.json({ msg: req.params.timer_id })
    // Timer
    TimerFields = {};
    if (req.body.title) TimerFields.title = req.body.title;
    if (req.body.project) TimerFields.project = req.body.project;
    if (req.body.elapsed) TimerFields.elapsed = req.body.elapsed;
    if (req.body.runningSince) TimerFields.runningSince = req.body.runningSince;
    if (req.body.editFormOpen) TimerFields.editFormOpen = req.body.editFormOpen;

    Timer.findOneAndUpdate(
      { _id: req.params.timer_id },
      { $set: TimerFields },
      { new: true }
    )
    .then(timer => res.json(timer))
      .catch(err => res.status(404).json(err));
  }
);
// @route   DELETE api/timers/:timer_id
// @desc    Delete timer from timers
// @access  Public
router.delete(
  '/:timer_id',
  (req, res) => {
    //res.json({ msg: req.params.timer_id })
    Timer.findOneAndRemove({ _id: req.params.timer_id})
    .then(() => {
     
      res.json({ success: true })
    })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
