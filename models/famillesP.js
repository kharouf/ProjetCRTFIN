const mongoose = require('mongoose');

const schema = mongoose.Schema


const famillesPschema = new schema({

    num_dossier: {
        type: String,
        
        value: "CRTGHF"

    },
    // بيانات خاصة بصاحب الحق
    nom: {
        type: String,
        
    },
    prenom: {
        type: String,
        
    },
    
    date_n: {
        type: Date,
        
    },
    lieu_n: {
        type: String
    },

    localisation: {
        type: [String],
        
    },
    adresse: {
        type: String,
        
    },
    num_tele: {
        type: Number
        
    },
    cin: {
        type: Number,
        
    },
    type_Carte_traitement: {
        type: String,
        
    },
    num_securite_sociale: {
        type: Number,
        
    },
  
    // 
    // بيانات خاصة بالقرين
    nom_m: {
        type: String,
        
    },
    prenom_m: {
        type: String,
        
    },
    
    date_n_m: {
        type: Date,
        
    },
    lieu_n_m: {
        type: String
    },
    
    cin_m: {
        type: Number,
        
    },
    // الحالة المدنية
    // حالة وفاة
    Deces: {
        type: Boolean
    },
    // حالة طلاق

    divorce: {
        type: Boolean
    },
    // حالة اعاقة
    handicap: {
        type: Boolean

    },
    malade: {
        type: String

    },
      //
      // المهنة
      travail: {
        type: String,
        
    },
    // مكان عمل الزوج
    lieu_travail_mari: {
        type: String

    },
    lieu_travail_femme: {
        type: String

    },
    // الأبناء
    fils: [{
        nom_f: String,
        prenom_f: String,
        date_n_f: Date,
        annee_scolaire: String,
        sexe_f: String,
        taille_f: String,

    }],
    // وضع مقر السكن
    detailes: {
        type: String

    },
    image: {
        type: [String]

    },
    Commentaire: {
        type: String
    },
    clientId: {
        type:mongoose.Schema.Types.ObjectId, 
        ref: "user"
      }



}
)

const familles = mongoose.model('familles', famillesPschema)
module.exports = familles

// module.exports = Person = mongoose.model('person',Userchema)