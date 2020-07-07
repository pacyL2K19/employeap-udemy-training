const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Employee = require('./Employee')

const app = express ()
app.use(bodyParser.json())

const mongoUrl = 'mongo "mongodb+srv://cluster0.eldg9.mongodb.net/<dbname>" --username pacy1'
mongoose.connect(mongoUrl,  {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on('connected', () => {
    console.log('connected successfully')
})

mongoose.connection.on('error', (err) => {
    console.log('connection failled with error '+err)
})

app.post('/send-data', (req, res) => {
    const employee = new Employee ({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        salary : req.body.salary,
        position : req.body.position,
        picture : req.body.picture
    })
    employee.save ()
        .then(data => {
            console.log(data)
            res.send('Success')
        })
        .catch(err => {
            console.log(err)
        })

})

app.post('/delete', (req, res) => {
    Employee.findByIdAndRemove(req.body.id)
        .then(data => {
            console.log(data)
            res.send(data)
        })
})

app.post('/update', (res, req) => {
Employee.findByIdAndUpdate(req.body.id, {
    name : req.body.name,
    email : req.body.email,
    phone : req.body.phone,
    salary : req.body.salary,
    position : req.body.position,
    picture : req.body.picture
    })
    .then(data => {
        console.log(data)
        req.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/', (res, req) => {
    Employee.find({})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
    res.setEncoding('welcome')
})

app.listen(3000, () => {
    console.log('Server is running')
})