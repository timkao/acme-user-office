const conn = require('./conn')

var Office = conn.define('office', {
  name: {
    type: conn.Sequelize.STRING
  },
  lat: {
    type: conn.Sequelize.FLOAT
  },
  lng: {
    type: conn.Sequelize.FLOAT
  }
})

module.exports = Office
