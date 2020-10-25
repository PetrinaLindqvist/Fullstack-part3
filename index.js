require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
//const { response } = require('express')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('data', (req, res) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  } 
  else
  {
    return null
  }
})
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :data"))

  


let persons = [
      { 
        id: 1, 
        name: "Arto Hellas", 
        number: "040-123456"
        
      },
      { 
        id: 2,  
        name: "Ada Lovelace", 
        number: "39-44-5323523"
        
      },
      { 
        id: 3,  
        name: "Dan Abramov", 
        number: "12-43-234345"
        
      },
      { 
        id: 4,
        name: "Mary Poppendieck", 
        number: "39-23-6423122"
        
      }
]
app.get('/api/persons/', (req, res) => {
  //res.json(persons)
  Person.find({}).then(persons => {
    res.json(persons.map(person => person.toJSON()))
  })
})

app.get('/api/persons/:id', (req, res, next) => {
    /*const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person)
    {
      res.json(person)
    }
    else
    {
      res.status(404).end()
    }*/
    Person.findById(req.params.id)
      .then(person => {
        if (person){
           res.json(person)
           }
             else
           {
           res.status(404).end()
          }
    
})
      .catch(error => next(error))
})
  

app.get('/info', (req, res) => {
    const info = `Phonebook has info for ${persons.length} people`
    const time = Date()

    res.send(`<p>${info}</p><p>${time}</p>`)


})
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
  .then(result => {
    res.status(204).end()
  })
  .catch(error => next(error))
  
})


app.post('/api/persons', (req, res) => {
  const body = req.body

  /*if(!body.name || !body.number) {
    return res.status(400).json({
      error: 'missing content'
    })
  }
  if (!persons.every(person => person.name !== body.name)) {
      return res.status(400).json({
        error: 'name must be unique'
      })
  }*/

  if (body.name === undefined) {
    return res.status(400).json({ error: 'Missing name!'})
  }
 
  if (body.number === undefined) {
    return res.status(400).json({ error: 'Missing number!'})
  }

  const person = new Person({
    id: Math.floor(Math.random() * 100), 
    name: body.name,
    number: body.number,
  
})

person.save().then(personSaved => {
  res.json(personSaved)
})
})

/*persons = persons.concat(person)
res.json(person)

})*/
const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id'})
  }
  next(error)

  }

  app.use(errorHandler)

const PORT = process.env.PORT 
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})

