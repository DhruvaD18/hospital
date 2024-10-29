const express = require('express');
const hospitalApp = require('./add-hospital');
const patientApp = require('./add-patient');

const app = express();

// Mount each app under a specific route

console.log('calling patient')
app.use('/patient', patientApp);
console.log('calling hospital')
app.use('/hospital', hospitalApp);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
