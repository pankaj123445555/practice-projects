const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require("./config/db");
connectDB();

const axios = require('axios');

const Port = 5000;
app.listen(Port,console.log(`successfully connected to the server`));
const Emp = require('./models/EmployeeModel');





// (async function(){

    
//  await Emp.deleteMany({});
   
// })();



(async function () {
	const response = await axios.get('https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1')
      
    bulkUpdateOps = [];   
    response.data.forEach(function(doc) {
        bulkUpdateOps.push({ "insertOne": { "document": doc } });

        if (bulkUpdateOps.length === 10) {
            Emp.bulkWrite(bulkUpdateOps).then(function(r) {
                 console.log(r);
            });
            bulkUpdateOps = [];
        }
    })
})();


 
 