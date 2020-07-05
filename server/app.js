import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
const app = express ()

app.get('/', (res, req) => {
    res.setEncoding('welcome')
})

app.listen(3000, () => {
    console.log('Server is running')
})