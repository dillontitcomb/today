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
  startDate: {
    type: Date,
    required: [true, 'When will this habit begin?'],
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: [true, 'When will this habit be complete?'],
  },
  frequencyValue: {
    type: Number,
    required: [true, 'How often will you do this habit?'],
  },
  frequencyPeriod: {
    type: String,
    required: [true, 'Is this a daily, weekly, or monthly goal?'],
  },
  totalGoal: {
    type: Number,
    required: [false, 'How many days constitutes success for this habit?'],
    default: 0,
  },
  currentTotal: {
    type: Number,
    required: [false, 'How many times have you completed this habit?'],
    default: 0,
  },
  habitScore: {
    type: String,
    required: [false, 'What is the overall score for this habit?'],
    default: null,
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
