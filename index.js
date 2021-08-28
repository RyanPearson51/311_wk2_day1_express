
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  return res.json(users);
})

app.get('/users/1', (req, res) => {
  //need to do anything specific to only return one user?
  //return res.json(users)
})

//app.post()

//app.put()

//app.delete()

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))