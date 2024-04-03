const mongoose = require('mongoose');
const { Schema } = mongoose;

const MealSchema = new Schema({
   _id: {
      type: String
   },
   RecipeName:{
type:String
   },
   
   Instructions:{
type:String
   },
 
//    TotalTimeInMins:{
// type:Date
//    },
    }
  );
  const Meal=mongoose.model('meal',MealSchema);
// User.createIndexes();
  module.exports=Meal;