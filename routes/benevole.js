const express = require('express')

const benevoleRouter = express.Router()

const benevole = require("../models/benevole")

// Get user benevole 
benevoleRouter.get('/getb', isAuth(), async (req, res) => {

    try {
        const result = await benevole.find({ clientId: req.user.id }).populate("clientId");
        console.log(result)
        // console.log({ clientId: req.user.id })


        // console.log(result)
        res.send({ benevole: result, message: ' user benevole GETED' })


    } catch (error) {
        console.log(error)
    }

}
)

// POST New newbenevole
benevoleRouter.post('/add', isAuth(), async (req, res) => {

   
    try {
        const newbenevole = await benevole.create({
            ...req.body,
            clientId: req.user?.id,
        });
        const result = await newbenevole.save()
        res.send({ benevole: result, message: 'Benevole Added ' })


    } catch (error) {
        console.log(error)
    }

}
)

// Get All newbenevoles
benevoleRouter.get('/get', async (req, res) => {

    try {
        const result = await benevole.find()

        res.send({ benevole: result, message: 'All benevole is  GETED ' })

    } catch (error) {
        console.log(error)
    }

}
)

// Get newbenevole by id
benevoleRouter.get('/:id', async (req, res) => {

    try {
        const result = await benevole.find({ _id: req.params.id })


        res.send({ benevole: result, message: ' benevole GETED' + " " + req.params.id })


    } catch (error) {
        console.log(error)
    }

}
)


// Delete benevole By id
benevoleRouter.delete('/:id', async (req, res) => {

    try {
        const result = await benevole.findByIdAndDelete({ _id: req.params.id })


        res.send({ message: ' benevole Deleted' + " " + req.params.id })


    } catch (error) {
        console.log(error)
    }

}
)
// Update benevole BY id

benevoleRouter.put('/:id', async (req, res) => {

    try {
        const result = await benevole.findByIdAndUpdate(
            {_id:req.params.id },
            { $set: { ...req.body } })


        res.send({ benevole:result, message: ' benevole Updated' + " " + req.params.id })


    } catch (error) {
        console.log(error)
    }

}
)

module.exports = benevoleRouter