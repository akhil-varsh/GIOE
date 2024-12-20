// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const alumniRoutes = require('./routes/alumni');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/alumni', alumniRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Schema and Model
const alumniSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  graduationYear: { type: String, required: true },
  department: { type: String, required: true },
  jobTitle: { type: String },
  company: { type: String },
  location: { type: String },
  linkedIn: { type: String },
  notes: { type: String },
  privacyConsent: { type: Boolean, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Alumni = mongoose.model('Alumni', alumniSchema);

// Routes
app.post('/api/alumni', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      graduationYear,
      department,
      jobTitle,
      company,
      location,
      linkedIn,
      notes,
      privacyConsent,
    } = req.body;

    // Create new entry
    const newAlumni = new Alumni({
      fullName,
      email,
      phone,
      graduationYear,
      department,
      jobTitle,
      company,
      location,
      linkedIn,
      notes,
      privacyConsent,
    });

    await newAlumni.save();
    res.status(201).json({ message: 'Details saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
