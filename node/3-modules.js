
// commonJs, every file is module (by default)
// modules   - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utilise')
// console.log(names)


const data = require('./alternativeexport')
console.log(data);
sayHi("Masoom")
sayHi(names.john)
sayHi(names.peter)


// build in modules