const os = require('os')


//info about the current user
const user = os.userInfo()



//methosds returns the system uptime in seconds

console.log(`The System Up Time is ${os.uptime()} seconds`);
// console.log(`The system up time is ${os.uptime()} seconds`);
console.log(`The system up time is ${os.hostname()} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOs);
