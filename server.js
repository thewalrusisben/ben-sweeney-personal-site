var express = require('express')
var path = require('path')
var axios = require('axios')
var app = express()


app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

setInterval(() => {
  console.log('ping...')
  axios.get(`http://localhost:8081/pingpong`)
  .then((response) => {
    console.log(`${response.data.message}...`)
  })
}, 10000)

app.listen(process.env.PORT || 9000)
