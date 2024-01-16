const express = require("express");
var app = express();
const path = require("path");
const mongoose = require('mongoose');
var bodyParser=require("body-parser");
const { error } = require("console");
port = 5000;






// database 

mongoose.connect('mongodb://127.0.0.1:27017/feedback');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended: true
}));














const realpath = path.join(__dirname, "../public");

app.use(express.static(realpath));



app.get("/", (req, res)=>{
    app.send("home")
})

app.get("/neweditor.html", (req, res)=>{
    app.send("home")
})
app.post('/about', function(req,res){
    var Name = req.body.Name;
    var email =req.body.email;
    
    var phone =req.body.phone;
    var course =req.body.course;
    var organization =req.body.org;
    var feedback =req.body.feedback;
 
    var data = {
       "name": Name,
       "email":email,
       "phone":phone,
       "course":course,
       "organization":organization,
       "feedback":feedback

    }
    db.collection('details').insertOne(data,function(err, collection){
    if (err) throw err;
       console.log("Record inserted Successfully");
    });
    return res.redirect('about.html');
})





// app.get("", (req, res)=>{
//     app.send("home")
// })

app.get('/about.html',function(req,res){
    res.set({
       'Access-control-Allow-Origin': '*'
    });
    return res.redirect('index.html');
})

app.get("/contct.html", (req, res)=>{
    app.send("home")
})
app.get("/page.html", (req, res)=>{
    app.send("home")
})
app.get("/documant.html", (req, res)=>{
    app.send("home")
})
app.get("/css.html", (req, res)=>{
    app.send("home")
})

app.get("*", (req,res)=>{
    res.render(`error.html`);

})























app.listen(port, ()=>{
    console.log(`lishing port ${port}`);
})
