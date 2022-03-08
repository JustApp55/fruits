const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema)



module.exports = Fruit;






































// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];    

//justapp:justPz7Xp7Qyr

//MVC - module view controller : controller directly interact with the user
//INDUCES: index(get- displays a list) destroy update create edit show(get/:id - diplays only one blog of id) - 7 restful routes