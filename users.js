const express = require('express')
const router = express.Router()
const UserModel = require('./model/user')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await UserModel.findById(id)
    res.send(result)    
})

router.post('/register', (req, res) => {
    let name = req.body.naziv_projekta;
    let email = req.body.opis_projekta;
    let age = req.body.cijena_projekta;

    const user = new UserModel({
        name: name,
        email: email,
        age: age
    })

    user.save()
        .then(() => console.log('User saved to database...'))
        .catch(err => console.error('Error saving user...', err));

    res.redirect('/')
})


module.exports = router