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
  complete: {
    type: String,
    required: [false, 'Is this task complete or incomplete?'],
    default: false,
  },
  active: {
    type: Boolean,
    required: [false, 'Is this task active or inactive?'],
    default: true,
  },
  habit: {
    type: Schema.Types.ObjectId,
    ref: 'habit',
    required: [false, 'Is this task attached to a habit?'],
  },
  day: {
    type: Schema.Types.ObjectId,
    ref: 'day',
    required: [false, 'What day is this task assigned to?'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Who does this task belong to?'],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateAssigned: {
    type: Date,
    required: [false, 'When was this task assigned to a day?'],
    default: null,
  },
  dateCompleted: {
    type: Date,
    required: [false, 'When was this task completed?'],
    default: null,
  },
});

export default mongoose.models.Task || mongoose.model('task', TaskSchema);
