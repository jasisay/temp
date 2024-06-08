const os = require('os');

//To get info about user
const user = os.userInfo();
//console.log(user,`The system uptime is ${os.uptime()}`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totalMem: os.totalmem()
}

console.log(currentOS);