const mongoose = require("mongoose");
 const EmployeeModel = mongoose.Schema({
    id : {type: String},
    imageURL: {type:String},
    firstName: {type:String},
    lasttName: {type:String},
    email: {type:String},
    contactNumber: {type:String},
    age: {type:String},
    dob: {type:String},
    Salary : {type:String},
    address: {type:String},
 })

 const Emp = mongoose.model("Emp",EmployeeModel);

 module.exports = Emp;