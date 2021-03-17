import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const HabitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the habit name.'],
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  frequency: {
    type: Number,
    required: [true, 'How often will you do this habit?'],
  },
  period: {
    type: String,
    required: [true, 'Is this a daily, weekly, or monthly goal?'],
  },
  durationLength: {
    type: Number,
    required: [true, 'For how long will you continue this habit?'],
  },
  durationType: {
    type: String,
    required: [true, 'Is this duration in days, weeks, or months?'],
  },
  totalGoal: {
    type: Number,
    required: [true, 'How many days constitutes success for this habit?'],
  },
  currentTotal: {
    type: Number,
    required: [true, 'How many times have you completed this habit?'],
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Who does this habit belong to?'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Habit || mongoose.model('Habit', HabitSchema);
