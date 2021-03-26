import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'User credentials for profile'],
  },
  firstName: {
    type: String,
    required: [false, "Profile holder's first name"],
  },
  lastName: {
    type: String,
    required: [false, "Profile holder's last name"],
  },
  habits: [
    {
      type: Schema.Types.ObjectId,
      ref: 'habit',
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Profile ||
  mongoose.model('profile', ProfileSchema);
