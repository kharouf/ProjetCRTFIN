const mongoose  =require('mongoose');

const schema = mongoose.Schema


const Userschema = new schema({
   num_dossier:{
      type:String,
      default:"CRTGHV"+Math.floor(Math.random() * 1000)
      
     },
   name:{
    type:String,
    required:true
   },
   lastName:{
    type:String,
    required:true
   },
   email:{
    type:String,
    // required:true
    // required: [true, 'Email is required']
   },
   password:{
    type:String,
    required:true
   },
   isAdmin:{
      type:Boolean,
      default:false
     },
     isBenevole:{
      type:Boolean,
      default:false
     },
     Confirme:{
      type:Boolean,
      default:false
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

     benevole: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "benevole"
    },
    evenement: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "evenement"
    },
    famillesP: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "famillesP"
    }
     
   
   
   

}
)

const user = mongoose.model('user',Userschema)
module.exports = user

// module.exports = Person = mongoose.model('person',Userchema)