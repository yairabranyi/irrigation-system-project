const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  daysInterval: Number,
  openingDuration: String,
  startTime1: String,
  endTime1: String
})
module.exports = mongoose.model('Schedule', scheduleSchema)
