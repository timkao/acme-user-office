const router = require('express').Router()
const {User, Office} = require('../db').models

router.get('/', (req, res, next)=> {
  Office.findAll({include: [User]})
  .then(result => {
    res.send(result)
  })
})

router.delete('/:id', (req, res, next)=> {
  Office.destroy({where: {id: req.params.id}})
  .then(result => {
    res.send('removed')
  })
})

router.post('/', (req, res, next)=> {
  Office.create(req.body)
  .then( result => {
    res.send(result)
  })
})

module.exports = router
