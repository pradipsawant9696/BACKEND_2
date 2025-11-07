/* 1. install monogodb

2. install mongoosejs
npm i mongoose

3. require and  setup connection 

4. make Schema

5. create model
*/

// 3. require and  setup connection 
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/practice")  
// above line also create a database last name is db name 



// 4. make Schema
const userschema = mongoose.Schema({
  username:String,
  name:String,
  age: Number
})

// 5. create model  1st partameter is name of the model(collection) we want to set aned another is schema and then export it.

module.exports=mongoose.model("user",userschema);


