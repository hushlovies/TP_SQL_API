const express = require('express');
const index = express();

index.get("/", (req,res)=>{
    console.log("salut les gars");
});

index.listen(3000);
console.log("attente de reques au port 3000");