import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the task name.'],
  },
  time: {
    type: Number,
    required: [true, 'How long will this task take?'],
  },
  resistance: {
    type: Number,
    required: [true, 'How resistant are you to this task?'],
  },
  urgency: {
    type: Number,
    required: [true, 'Please indicate the urgency of this task.'],
  },
  recurring: {
    type: Boolean,
    required: [true, 'Do you do this task regularly?'],
  },
  status: {
    type: String,
    required: [true, 'What is the status of this task?'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Who does this task belong to?'],
  },
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
