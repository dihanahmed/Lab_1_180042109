//Synchronous and Asynchronous function

// readFile
//writeFile
//appendFile
//Delete
//Rename

const fs=require('fs');

//fs.writeFileSync('./contents/demoFile.txt',"We are learning Nodejs");

//fs.appendFileSync('./contents/demoFile.txt',"We are learning javascript");

//fs.rename("./contents/demoFile.txt","./contents/RenameFile.txt",(err)=>{
// if(err){
//     console.log(err);
// }else{
//     console.log("Rename Successfull!");
// }
//})

console.log("before");
fs.readFile("./contents/RenameFile.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else {
        console.log(data);
        fs.appendFile("./contents/RenameFile.txt","Is this an Asynchronous function ?",(err)=>{
            console.log(err);
        });
        fs.readFile("./contents/RenameFile.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }else {
                console.log(data);
                
            }
        })
    }
})
console.log("after");