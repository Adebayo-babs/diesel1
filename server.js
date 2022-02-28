const express = require("express");
const app = express();

app.use(express.static("public"));



app.get("/", (request, response) =>{
    response.sendFile(__dirname+"/index.html")
})

app.get("/order", (request, response) =>{
    response.sendFile(__dirname+"/order.html")
})

app.get("/contact", (request, response) =>{
    response.sendFile(__dirname+"/contact.html")
})

app.get("/mission", (request, response) =>{
    response.sendFile(__dirname+"/mission.html")
})

app.get("/about", (request, response) =>{
    response.sendFile(__dirname+"/about.html")
})


app.listen(8080, ()=>{
    console.log("Server started at port 8080")
})