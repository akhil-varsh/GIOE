const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: [true, 'Full name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: { 
    type: String 
  },
  graduationYear: { 
    type: Number, 
    required: [true, 'Graduation year is required'] 
  },
  department: { 
    type: String, 
    required: [true, 'Department is required'] 
  },
  jobTitle: { 
    type: String 
  },
  company: { 
    type: String 
  },
  location: { 
    type: String 
  },
  linkedIn: { 
    type: String 
  },
  notes: { 
    type: String 
  },
  privacyConsent: { 
    type: Boolean, 
    required: [true, 'Privacy consent is required'] 
  },
  submittedAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Alumni', alumniSchema);
