const conn = require('./conn')
const Office = require('./Office')
const User = require('./User')

User.belongsTo(Office)
Office.hasMany(User)

function sync() {
  return conn.sync({force: true})
}

function seed() {
  return Promise.all([
    Office.create({
      name: '2 Times Square, New York, NY 10036, USA',
      lat: 40.7594456,
      lng: -73.9847779
    }),
    Office.create({
      name: '5 Hanover Square, Floor 25, New York, NY 10004, USA',
      lat: 40.705076,
      lng: -74.00916
    }),
    Office.create({
      name: '665 Amsterdam Ave, New York, NY 10025, USA',
      lat: 40.791792,
      lng: -73.971755
    }),
    User.create({name: 'Tim'}),
    User.create({name: 'Peggy'}),
    User.create({name: 'Emiri'})
  ])
  .then(([time, hanover, amsterdam, tim, peggy, emiri]) => {
    return emiri.setOffice(time)
  })
}

module.exports = {
  conn,
  sync,
  seed,
  models: {
    User,
    Office
  }
}
