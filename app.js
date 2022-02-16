//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/Date.js");

const app = express();

let items = ["Buy Fish", "Cook Dishes", "Eat the Food"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// -- HOME ROUTE --
app.get("/", function(req, res){

  let day = date.getDate();
  let year = date.getyear();

  res.render("list", {listTitle: day, newItems: items});
});

app.post("/", function(req, res){
  console.log(req.body);
  let item = req.body.newItem;
  let btn = req.body.list;

  if(btn === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
});


//  -- WORK ROUTE --
app.get("/work", function(req, res){
  res.render("list", {
    listTitle: "Work List",
    newItems: workItems,
    });
});


//  -- ABOUT ROTE --
app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3002, function(){
  console.log("Server started on port 3002.");
});


// switch (currDay) {
//   case 0:
//     day = "Sunday";
//     break;
//
//   case 1:
//     day = "Monday";
//     break;
//
//   case 2:
//     day = "Tuesday";
//     break;
//
//   case 3:
//     day = "Wednesday";
//     break;
//
//   case 4:
//     day = "Thursday";
//     break;
//
//   case 5:
//     day = "Friday";
//     break;
//
//   case 6:
//     day = "Saturday";
//     break;
// }


// if(currDay == 6 || currDay == 0)
// {
//   day = "Weekend";
//   res.render("list", {kindOfDay: day});

  // to send single html element or singe data
  // res.send("Hey its a Weekend!!");

  // to send multiple data in the form of html elements
  // res.write("<h1>Hurrayy!!!</h1>");
  // res.write("<p>Its a Weekend!!</p>");
  // res.send();
// }
// else{
//   day = "Weekday";
//   res.render("list", {kindOfDay: day});

  // res.send(" Boo! I have to work");
  // res.sendFile(__dirname + "/index.html");
// }
