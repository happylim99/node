const https = require('https')

const url = `https://api.darksky.net/forecast/8ec396387a31ff7b7c9e79fe6e7d1407/40,-75`

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) =>  {
    console.log('An error', error)
})

request.end()