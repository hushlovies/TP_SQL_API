
const express =require("express");
const app=express();
const PORT= 8081;
app.listen(PORT,
    ()=>console.log(`running on http://localhost:${PORT}`)
);

app.get("/", (req,res)=>{
    console.log("salut les gars");
});

app.get("/test", (req,res)=>{
    console.log("mayday");
});