const os= require('os');

//showing userinfo of a computer--userInfo
const userInfo = os.userInfo(); 
console.log(userInfo); 

// total time spent after  last turning on windows --uptime
const up= os.uptime();
console.log(up);

// info about current os
const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);