import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DaySchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Who does this day belong to?'],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateAssigned: {
    type: Date,
    required: [false, 'What date is this day assigned to?'],
    default: Date.now,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
      required: [false, 'What tasks are assigned to this day?'],
    },
  ],
  pointsPossible: {
    type: Number,
    reqired: [false, 'How many points can be achieved on this day?'],
    default: 0,
  },
  pointsAchieved: {
    type: Number,
    required: [false, 'How many points were achieved on this day?'],
    default: 0,
  },
  dayScore: {
    type: String,
    required: [false, 'What is the overall day score?'],
    default: null,
  },
});

export default mongoose.models.Day || mongoose.model('Day', DaySchema);
