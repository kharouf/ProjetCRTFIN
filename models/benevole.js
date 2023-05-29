var mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const schema = mongoose.Schema

  
const Benevoleschema = new schema({
  
    
   nom:{
    type:String,
    
   },
   prenom:{
    type:String,
    
   },
   sexe:{
    type:String,
    
   },
   nom_pere:{
    type:String,
    
   },
   nom_mere:{
    type:String,
    
   },
   prenom_mere:{
      type:String,
      
     },
//    
   num_tele_parents:{
    type:Number,
   },
//    
   date_n:{
    type:Date,
    
   },
   lieu_n:{
    type:String
   },
   adresse:{
    type:String,
    
   },
   cin:{
    type:Number,
    
   },
   // 
   Annee_volontariat:{
    type:Number,
    
   },
   profession:{
    type:String    
   },
   num_tele:{
    type:Number,
    
    },
   email:{
    type:String,
    
   },
   niveau:{
    type:String,
    
   },
   diplome:{
    type:String,
    
   },
   certificat_crt:{
      type:String,
      
     },
   nom_etablisement:{
    type:String,
    
   },
   loisir:{
    type:String,
    
   },
   secouriste:{
      type:String,
      
     },


   image:{
    type:String,

   },
//   admin 
     commentaire:{
      type:String,
      
     },
     nb_participation:{
      type:String,
      
     },
     isbenevole:{
      type:Boolean,
      default:true
     },
   
   clientId: {
      type:mongoose.Schema.Types.ObjectId, 
      ref: "user"
    }
    //  

    //  
   
   

}
)

const benevole = mongoose.model('benevole',Benevoleschema)
module.exports = benevole

// module.exports = Person = mongoose.model('person',Userchema)