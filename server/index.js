
const express =require("express");
const app=express();
const PORT= 8081;
const db= require("./db");

app.listen(PORT,
    ()=>console.log(`running on http://localhost:${PORT}`)
);

app.get("/", (req,res)=>{
    db.query(`select * from Utilisateurs`,
    function(err,res){
    console.log(res)
}
);
});

// app.get("/test", (req,res)=>{
//     console.log("mayday");
// });

