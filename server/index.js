const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')

const chefs = require('./chefs.json')
const recipes = require('./recipes.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('go to chefs')
})

app.get('/chefs', (req, res)=>{
  res.send(chefs)
})

app.get('/chefs/:id', (req, res)=>{
  const id = req.params.id
  
  const chef = chefs.find(c => c.id === parseInt(id))

  res.send(chef)
})

app.get('/recipes', (req, res)=>{
  res.send(recipes)
})

app.listen(port)