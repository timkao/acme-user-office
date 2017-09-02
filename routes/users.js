const router = require('express').Router()
const {User, Office} = require('../db').models

router.get('/', (req, res, next) => {
  Promise.all([
    User.findAll({include: [Office]}),
    Office.findAll({include: [User]})
  ])
  .then(([users, offices])=> {
    res.send({
      users,
      offices
    })
  })
})

router.post('/', (req, res, next)=> {

  if (req.body.name === '') {
    req.body.name = 'Default'
  }

  User.create(req.body)
  .then( result => {
    res.send(result)
  })
})

router.delete('/:id', (req, res, next)=> {
  User.destroy({where: {id: req.params.id}})
  .then( result => {
    res.send('removed')
  })
})

router.put('/:id', (req, res, next)=> {
  Promise.all([
    User.findById(req.params.id),
    Office.findOne({where: {name: req.body.name}})
  ])
  .then( ([user, office]) => {
    return user.setOffice(office)
  })
  .then( result => {
    res.send('updated')
  })
})

module.exports = router
