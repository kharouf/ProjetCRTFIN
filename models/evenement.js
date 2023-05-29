const mongoose  =require('mongoose');

const schema = mongoose.Schema


const Evenementschema = new schema({
   
   name:{
    type:String,
    
   },
   description:{
    type:String,
    
   },
   image:{
    type:String,
       
   },
   startDate:{
    type:Date,
    
   },
   endDate:{
    type:Date,
    
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