const mongoose  =require('mongoose');

const schema = mongoose.Schema

   const timeDate = new Date()
 

const Evenementschema = new schema({

   
   name:{
    type:String,
    
   },
   description:{
    type:String,
    
   },
   image:{
      type: String
    
       
   },
   startDate:{
    type:Date,
    
   },
   endDate:{
    type:Date,
    
   },
   instatnt:{
      type:Date,
      default:timeDate,
   },
   time:{
      type:String,
   },
   position: {
      type: String
   },

   clientId: {
      type:mongoose.Schema.Types.ObjectId, 
      ref: "user"
    }
}
)

const evenement = mongoose.model('evenement',Evenementschema)
module.exports = evenement

// module.exports = Person = mongoose.model('person',Userchema)