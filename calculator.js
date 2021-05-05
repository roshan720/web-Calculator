const express =require("express");
const bodyParser =require("body-parser");

const app = express();

app.use(bodyParser.urlencoded ({extended:  true}));

app.get ("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});


app.get ("/",function(req,res){
    res.sendFile(__dirname + "/style.css");
});

app.post("/",function(req ,res)
{ 
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);

   var result = num1+num2;

    res.send("Your value is " + result);
});

app .listen(3000,function()
{
    console.log("server is challing");
});