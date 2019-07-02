const name = 'sean'
const age = 39
/*
const user = {
    name: name,
    age: age,
    location: 'Malaysia'
}
*/
const user = {
    name,
    age: age,
    location: 'Malaysia'
}
console.log(user)

// object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    rating: 4.2,
    salesPrice: undefined
}

const {label, stock, rating = 5 } = product
console.log(label)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
transaction('order', product)