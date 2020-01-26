const express = require('express')
const app = express()

const port = 5000
//ROUTS
app.get('/api/weatherData', (req, res)=>{
    const weatherData = {
        cityName : "jerusalem",
        temp: 20,
    }

    res.send(weatherData)
})


app.listen(port, ()=>console.log(`server started at port ${port}`))