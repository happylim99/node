const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const location = process.argv[2]

/*
const url = 'https://api.darksky.net/forecast/8ec396387a31ff7b7c9e79fe6e7d1407/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect to weather service')
    } else if(response.body.error) {
        console.log(response.body.error)
    } else {
        const temperature = response.body.currently.temperature
        const chanceOfRain = response.body.currently.precipProbability
        console.log(`It is currently ${temperature} degrees out. There is a ${chanceOfRain}% chance of rain.`)
    }
})
*/

/*
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFwcHlsaW05OSIsImEiOiJjanhpdXI5eTMxNXRuM3lvOGxuMTYwd3o1In0.e_a8dgNB2ns3Y9m0D_35bw&limit=1'

request({ url: geoUrl, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect to geo service')
    } else if(response.body.features.length === 0) {
        console.log('No record found')
    } else {
        const longtitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(`Longtitude : ${longtitude}`)
        console.log(`Latitude : ${latitude}`)
    }
})
*/
/*
if(!location) {
    console.log('No location provided')
} else {
    geocode(location, (error, data) => {
        if(error) {
            return console.log(error)
        }
        console.log('Error', error)
        console.log('Data', data)
        forecast(data.longitude, data.latitude, (error, data) => {
            if(error) {
                return console.log(error)
            }
            console.log('Error', error)
            console.log('Data', data)
        })
    })
}
*/

/*
forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
*/

if(!location) {
    console.log('No location provided')
} else {
    geocode(location, (error, {longitude, latitude}) => {
        if(error) {
            return console.log(error)
        }
        console.log('Error', error)
        //console.log('Data', data)
        forecast(longitude, latitude, (error, data) => {
            if(error) {
                return console.log(error)
            }
            //console.log('Error', error)
            console.log('Data', data)
        })
    })
}
