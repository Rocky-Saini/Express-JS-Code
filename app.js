const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const port=9027;

app.use(bodyparser.json());
//write bodyparser urlencoded

app.use(bodyparser.urlencoded({ extended: false}));
//write bodyparser urlencoded
// np

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

})
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));

})

app.get("/api/data",(req,res)=>{
    res.json({
        name:"Rocky Saini",
        age:19,
        address: {
            city:"Gurugram",
            state:"NY"
        }
    })
})

app.post("/api/register",(req,res)=>{
       const email = req.body.email;
       const password = req.body.password;
       
       //mongodb database store

       res.json({
           success: true,
           
       })
})

app.post("/api/view",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const money= req.body.money;
    
    //mongodb database store
  
    res.json({
        success: true,
        name,
        age,
        money
        
    })
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})

//READ CREATE DELETE UPDATE
//GET POST DELETE PUT

