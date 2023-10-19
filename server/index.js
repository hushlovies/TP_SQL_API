
const express =require("express");
const app=express();
const PORT= 8081;
const db= require("./db");
routes=require('./Controllers/tpController.controller')
app.listen(PORT,
    ()=>console.log(`running on http://localhost:${PORT}`)
);

app.use('/products')

// app.get("/", (req,res)=>{
//     db.query(`select * from produits`,
//     function(err,res){
//     console.log(res)
// }
// ); 
// });

// app.get("/test", (req,res)=>{
//     console.log("mayday");
// });

