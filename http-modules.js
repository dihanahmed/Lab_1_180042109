// creating server

const http= require('http');

  const server= http.createServer((req,res)=>{
  if (req.url=="/"){
    res.write("<h1> this is a base URL.</h1>");
    res.end();
  } else if (req.url=="/home"){
    res.write("<h1> this is home page</h1>");
    res.end();
  }  else {
    res.write("<h1> this page doesn't exist anymore</h1><a href ='/'> go to base </a>");
    res.end();
  }
    
})

module.exports={ server };

// head-- text , which type of text or response
//body--content