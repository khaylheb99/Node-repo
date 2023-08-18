const os = require('os');

//Getting user information
const user = os.userInfo();
console.log(user)

// Getting the system uptime
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    Total_mem: os.totalmem(),
    Free_mem: os.freemem()
};

console.log(currentOS);