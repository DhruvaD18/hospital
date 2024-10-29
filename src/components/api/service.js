const express = require('express');
const hospitalApp = require('./add-hospital');
const patientApp = require('./add-patient');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"], // Frontend URL
    credentials: true, // Allows cookies and other credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specifies allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specifies allowed headers
}));
// Mount each app under a specific route

app.use('/patient', patientApp);
app.use('/hospital', hospitalApp);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
