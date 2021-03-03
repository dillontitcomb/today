import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
  },
});

export default mongoose.models.Person || mongoose.model('Person', PersonSchema);
