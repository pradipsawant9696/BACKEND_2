var express = require('express');
var router = express.Router();
const usermodel=require("./users");


/* GET home page. */
router.get('/', function(req, res) {
  res.render("index");
});



// for creating the user

router.get('/create',async function(req, res) {
   const use1= await usermodel.create({
       username:"pradipsawant",
       name:"padip",
       age:33
    },{
       username:"pritisawanrt",
       name:"priti",
       age:44
    });


    res.send(use1);
  
});

// it create a usermode in databasse 

// above all moethods releted to monogodb is asycronous so required to add the async await and create method always has a object inside it and the objects values we can write in any order




// to get all users

router.get("/getalluser", async function(req,res){
 let all= await usermodel.find();
 res.send(all);
})

// to get one user users

router.get("/onefind", async function(req,res){
 let all= await usermodel.findOne({name:"priti"});
 res.send(all);
})



// now how to delete the user

router.get("/delete",async function(req,res){
 let ue = await usermodel.findOneAndDelete({
    name:"padip"
  });
  res.send(ue);
});


// session creation code

router.get("/ban", function(req,res){
   req.session.ban=true;
   res.render("index");
});




router.get("/checkban", function(req,res){
  if(req.session.ban===true){
      res.send("your band")
  }else{
      res.send("your not band")
  }
  
});

router.get("/unban",function(req,res){
  req.session.destroy(function(err){
    if(err)throw err;
    res.send("ban removed");
  })
})




// creating the cookies

router.get("/c",function(req,res){
  res.cookie("age",35);
  res.render("index");
})

router.get("/read",function(req,res){
 console.log(req.cookies);
 res.send("check");
  
})



// deleting the cookies

router.get("/deletec",function(req,res){
  res.clearCookie("age");
  res.send("clear ho gayi");
})


module.exports = router;
