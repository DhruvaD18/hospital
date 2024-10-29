const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: "*",
}));
app.use(express.json());

// MongoDB connection
const hospitalConnection = mongoose.createConnection('mongodb://localhost:27017/hospitalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

hospitalConnection.on('connected', () => console.log('Connected to hospitalDB'));

// Define Mongoose schema and model using the connection
const hospitalSchema = new mongoose.Schema({
    hospitalName: String,
    location: String,
    email: String,
    password: String,
    contact: String,
    beds: Number,
    staff: Number,
    specialties: [String],
});
const Hospital = hospitalConnection.model('Hospital', hospitalSchema);

// Endpoint to add hospital data
app.post('/api/addHospital', async (req, res) => {
    try {
        const newHospital = new Hospital(req.body);
        await newHospital.save();
        res.status(201).send(newHospital);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = app;













// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');


// console.log('entered hospital file')
// const app = express();
// app.use(
//   cors({
//       origin: "*",
//       // credentials: true,
//     })
// );
// app.use(bodyParser.json());

// // MongoDB connection
// const hospitalConnection = mongoose.createConnection('mongodb://localhost:27017/hospitalDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// hospitalConnection.on('connected', () => console.log('Connected to hospitalDB'));

// // Define Mongoose schema and model
// const hospitalSchema = new mongoose.Schema({
//   hospitalName: String,
//   location: String,
//   email: String,
//   password: String,
//   contact: String,
//   beds: Number,
//   staff: Number,
//   specialties: [String],
// });
// const Hospital = mongoose.model('Hospital', hospitalSchema);

// // Endpoint to add hospital data
// app.post('/api/addHospital', async (req, res) => {
//   try {
//     const newHospital = new Hospital(req.body);
//     await newHospital.save();
//     res.status(201).send(newHospital);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// module.exports = app;






// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // const app = express();
// // app.use(cors());
// // app.use(bodyParser.json());

// // // MongoDB connection
// // mongoose.connect('mongodb://localhost:27017/hospitalDB', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // }).then(() => console.log('Connected to MongoDB'))
// //   .catch((err) => console.error('Failed to connect to MongoDB', err));

// // // Define Mongoose schema and model
// // const hospitalSchema = new mongoose.Schema({
// //   hospitalName: String,
// //   location: String,
// //   email:String,
// //   contact:String,
// //   beds: Number,
// //   staff:Number,
// //   specialties: [String],
// // });
// // const Hospital = mongoose.model('Hospital', hospitalSchema);

// // // Endpoint to add hospital data
// // app.post('/api/addHospital', async (req, res) => {
// //   try {
// //     const newHospital = new Hospital(req.body);
// //     await newHospital.save();
// //     res.status(201).send(newHospital);
// //   } catch (error) {
// //     res.status(400).send(error);
// //   }
// // });

// // // Start server on port 5000
// // const PORT = 5000;
// // app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));