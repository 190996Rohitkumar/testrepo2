 const http=require("http");
 http.createServer(function(req,res){
     res.writeHead(200,{"content-Type":"text/html"});
     res.write("<h1>Hello Wordl</h1>");
     res.end();
     
 }).listen(process.env.PORT || 5100);
 console.log("the server is running on port");
