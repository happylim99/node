// const square = function (x) {
//     return x * x
// }

const square = (x, callb) => {
    setTimeout(() => {
        callb(x * x)
    }, 2000)
    //return x * x
}

square(2, (sum) => {
    console.log(sum)
})

//const square = (x) => x * x
//console.log(square(3))

/*
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    // printGuestList: function () {
    //     console.log(`Guest list for ${this.name}`) 
    // }
    // printGuestList() {
    //     const that = this
    //     //console.log(`Guest list for ${this.name}`)
    //     this.guestList.forEach(function (guest) {
    //         console.log(`${guest} is attending ${that.name}`)
    //     })
    // }
    printGuestList() {
        //console.log(`Guest list for ${this.name}`)
        this.guestList.forEach((guest) => {
            console.log(`${guest} is attending ${this.name}`)
        })
    }
}

event.printGuestList()
*/