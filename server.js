// server.js

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appoinmentsRouter = require('./routes/appointments')


dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL 


app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(URL).then(() => {
    console.log("DB connected successfully");
  
    app.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}`);
    });
  }).catch((error) => console.log(error));
   

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appoinmentsRouter)
