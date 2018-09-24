const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TimersSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true
  },
  elapsed: {
    type: String,
    required: true
  },
  runningSince: {
    type: String
  },
  editFormOpen: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Timers = mongoose.model('timers', TimersSchema);
