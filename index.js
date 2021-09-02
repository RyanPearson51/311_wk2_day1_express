
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')
let counter = users.length;

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  console.log('GET /users', req.body);
  console.log(counter);
  return res.json(users);
})

app.get('/users/1', (req, res) => {
  return res.json(users[0]);
})

app.post('/users', (req, res) => {
  console.log('POST /users', req.body);
  const newUser = {
    "_id": 6,
        "name": "Paul Blart",
        "occupation": "Mall Cop",
        "avatar": "https://www.pluggedin.com/wp-content/uploads/2019/12/paul-blart-mall-cop.jpg"
  };
  users.push(newUser);
  counter++;
  res.json(users[users.length-1]);
})


app.put('/users/1', (req, res) => {
  users[0].name = 'Ryan';
  res.json(users[0]);
})

app.delete('/users/:userId', (req, res) => {
  //remove first item from users array
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))