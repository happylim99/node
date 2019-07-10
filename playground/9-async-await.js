const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Number must be positive')
            }
            resolve(a + b)
        }, 2000)
    })
}
/*
const doWork = () => {
    console.log('1')
    const sum = add(1, 99)
    console.log(sum)
    const sum2 = add(sum, 50)
    console.log(sum2)
    const sum3 = add(sum2, -3)
    console.log(sum3)
    return sum3
}
*/
/*
doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('error', e)
})
*/

add(1, 1).then((sum) => {
    return add(sum, 1)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    return console.log(e)
})