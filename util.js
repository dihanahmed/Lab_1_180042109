
const Hasnaine= require('./helloWorld');

//Hasnaine.Dihan();
//console.log(Hasnaine.name);


//setInterval--2 parameters(1st one is call back function, time)

setInterval(()=>{
Hasnaine.Dihan();
},1000);

//setTimeout-- call back function will be called only once
setTimeout(()=>{
    console.log(Hasnaine.name)
},5000);

// there are three types of module in node
//1. Local module
//2. Global module
//3. 3rd party module/ package