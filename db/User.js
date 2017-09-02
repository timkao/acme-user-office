const conn = require('./conn')

var User = conn.define('user', {
  name: {
    type: conn.Sequelize.STRING,
    defaultValue: 'default'
  }
})

module.exports = User
