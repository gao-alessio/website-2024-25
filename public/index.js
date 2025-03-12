console.log("Applicazione ")

const express = require("express");
const app = express();

const statici = express.static('public');
app.get('/',(req,res)=>{
  res.send("ciao");
})

app.listen(3000,()=> console.long("in ascolto sulla porta 3000"));




