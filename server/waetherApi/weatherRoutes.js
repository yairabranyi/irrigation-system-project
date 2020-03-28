const express = require('express')
const router = express.Router()
// const { WeatherDataModel } = require('./weatherData.model')

router.post("/", async (req, res) => {
    let weatherData = new WeatherDataModel(req.body.company);
    weatherData = await weatherData.save();

    const user = new UsersModel({
        ...req.body,
        company: company._id
    });

    try {
        const result = await user.save();
        res.send(result);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.get('/', async (req, res) => {
  const weatherData = await WeatherDataModel.find({})
  res.send(weatherData)
})

router.put('/:id', async (req, res) => {
  try {
    const weatherData = await WeatherDataModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    })
    res.send(user)
  } catch (e) {
    res.status(400).send(e.message)
  } 
})

module.exports = router
