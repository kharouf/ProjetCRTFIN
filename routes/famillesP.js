const express = require('express')

const famillesPRouter = express.Router()

const familles =require("../models/famillesP")

// get user famille
famillesPRouter.get('/getf', isAuth(), async (req, res) => {

    try {
        const result = await familles.find({ clientId: req.user.id }).populate("clientId");
        console.log({ clientId: req.user.id })
        res.send({ familles: result, message: ' user familles GETED' })


    } catch (error) {
        console.log(error)
    }

}
)

// POST New newfamillesP
famillesPRouter.post('/add',isAuth(), async (req, res) => {
    try {
        const newfamilles = new familles (
            {
            ...req.body,
            clientId: req.user?.id,}

            );
        const result= await newfamilles.save()
        res.send({ familles:result, message: 'familles Added ' })
        
    } catch (error) {
        console.log(error)
    }

}
)

// Get All newfamillesPs
famillesPRouter.get('/get', async (req, res) => {

    try {
        const result= await familles.find()
        
        res.send({ familles:result, message: 'All familles is  GETED ' })
        
    } catch (error) {
        console.log(error)
    }

}
)

// Get newfamillesP by id
famillesPRouter.get('/:id', async (req, res) => {

    try {
        const result= await familles.find({ _id:req.params.id} ) 
        
        
        res.send({ familles:result, message: ' familles GETED'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Delete famillesP By id
famillesPRouter.delete('/:id', async (req, res) => {

    try {
        const result= await familles.findByIdAndDelete({ _id:req.params.id} ) 
        
        
        res.send({  message: ' familles Deleted'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Update famillesP BY id

famillesPRouter.put('/:id', async (req, res) => {

    try {
        const result= await familles.findByIdAndUpdate(
            { _id:req.params.id} ,
            { $set:{...req.body}}) 
        
        console.log(req.params.id)
        res.send({ familles:result, message: ' familles Updated'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)

module.exports = famillesPRouter