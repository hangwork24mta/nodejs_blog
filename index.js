//import thu vien express trong folder node_modules (duoc tai khi install express cho prj)
const express = require('express')
// const express tra ve mot function
//goi function
const morgan = require('morgan')
const app = express()
//khai bao bien port
const port = 3000

//route
app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})