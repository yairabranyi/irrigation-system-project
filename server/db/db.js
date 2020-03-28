const mongoose = require('mongoose')

async function setDb () {
  await mongoose.connect('mongodb://localhost:27017/irrigation-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = { setDb }
