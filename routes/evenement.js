const express = require('express')

const evenementRouter = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'upload/' })
const moment  = require('moment')
// img storage path
// const imgconfig = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"./upload")
//     },
//     filename:(req,file,callback)=>{
//         callback(null,`imgae-${Date.now()}. ${file.originalname}`)
//     }
// })


// // img filter
// const isImage = (req,file,callback)=>{
//     if(file.mimetype.startsWith("image")){
//         callback(null,true)
//     }else{
//         callback(new Error("only images is allowd"))
//     }
// }

// const upload = multer({
//     storage:imgconfig,
//     fileFilter:isImage
// });

const evenement = require("../models/evenement")




// Get user evenement 
evenementRouter.get('/gete', isAuth(), async (req, res) => {

    try {
        const result = await evenement.find({ clientId: req.user.id }).populate("clientId");
        console.log({ clientId: req.user.id })
        res.send({ evenement: result, message: ' user evenement GETED' })


    } catch (error) {
        console.log(error)
    }

}
)
evenementRouter.post('/add', isAuth(),async (req, res) => {

    try {
        const newevenement = await  evenement.create({
           
            ...req.body,
            clientId: req.user?.id,
            
            
            
        });
        
        const result = await newevenement.save()
        res.send({ evenement: result, message: 'evenement Added ' })


    } catch (error) {
        console.log(error)
    }

}
)
// Get All evenements
evenementRouter.get('/get',  async (req, res) => {

    try {
        const result= await evenement.find();
        
        res.send({ evenement:result, message: 'All evenement is  GETED ' })
        
    } catch (error) {
        console.log(error)
    }

}
)

// Get evenement by id
evenementRouter.get('/:id', async (req, res) => {

    try {
        const result= await evenement.find({ _id:req.params.id} ) 
        
        
        res.send({ evenement:result, message: ' evenement GETED'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Delete evenement By id
evenementRouter.delete('/:id', async (req, res) => {

    try {
        const result= await evenement.findByIdAndDelete({ _id:req.params.id} ) 
        
        
        res.send({  message: ' evenement Deleted'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Update evenement BY id



evenementRouter.put('/:id', async (req, res) => {
    // console.log(req.body.evenement)

    try {
        const result= await evenement.findByIdAndUpdate(
            
            { _id:req.params.id} ,
            { $set:{...req.body}},
        )

            
             
        
        
        res.send({ evenement:result, message: ' evenement Updated'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)




module.exports = evenementRouter