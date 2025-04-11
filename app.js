const express= require("express");

const app= express();

app.get("/user",(req,res)=>{
    res.send({name:"harsimar",age:23})
})

app.post("/user",(req,res)=>{
    res.send("data posted ")
})



// app.use("/game",(req,res)=>{
//     res.send("hello gamer")
// })

// app.use("/exam",(req,res)=>{
//     res.send("hello exam")
// })

// app.use("/test",(req,res)=>{
//     res.send("hello harsimar")
// })

// app.use("/",(req,res)=>{
//     res.send("hello singh")
// })

app.listen(3000,()=>{
    console.log("server is created at 3000 ..")
})