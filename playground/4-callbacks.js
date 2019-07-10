/*
setTimeout(() => {
    console.log('2 seconds up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter( (name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})
*/
/*
const add = (num1, num2, callb) => {
    setTimeout(() => {
        const sum = num1 + num2
        //callb(sum)
        callb(num1 + num2)
    }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
*/

const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('this is data', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log(error)
    }
    console.log(result)
})