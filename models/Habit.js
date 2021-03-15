import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const HabitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the habit name.'],
  },
  tasks: {
    type: Schema.Types.ObjectId,
    ref: 'task',
    required: [true, 'What tasks belong to this habit?'],
  },
});

export default mongoose.models.Habit || mongoose.model('Habit', HabitSchema);
