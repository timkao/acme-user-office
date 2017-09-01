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

module.exports = router
