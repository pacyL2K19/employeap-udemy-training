import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema ({
    name : String,
    email : String,
    phone : String,
    picture : String,
    salary : String,
    position : String
})

export default mongoose.model('Employee', EmployeeSchema)