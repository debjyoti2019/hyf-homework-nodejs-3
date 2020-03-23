const express = require('express')
const app = express()
const port = 3000

const data={
    "1":"Debjyoti",
    "2":"Harsh",
    "3": "Manu"
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', function (req, res) {
  res.json({});
})

app.listen(port, () => console.log(`listening on port ${port}!`))