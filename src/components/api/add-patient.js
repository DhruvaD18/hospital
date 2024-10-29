const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/patientDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define Mongoose schema and model
const patientSchema = new mongoose.Schema({
  Name: String,
  email:String,
  aadhar:String,
});
const Patient = mongoose.model('Patient', patientSchema);

// Endpoint to add hospital data
app.post('/api/addPatients', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).send(newPatient);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start server on port 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));