const express = require('express')
const app = express();
const port = process.env.PORT || 3000
const db = require('./db')
const nunjucks = require('nunjucks')
const path = require('path')

nunjucks.configure('views', {noCache: true})
app.engine('html', nunjucks.render)
app.set('view engine', 'html')

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/users', require('./routes/users'))

app.get('/', (req, res, next) => {
  res.render('index')
})

app.listen(port, function(){
  db.sync()
  .then(db.seed)
  .then(result => {
    console.log(`listening on port ${port}`)
  })
})


// link express

// link postgres
