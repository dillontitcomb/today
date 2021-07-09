import Task from '../../../models/Task';
import Habit from '../../../models/Habit';
import dbConnect from '../../../utils/dbConnect';
import { getTaskScore } from '../../../utils/helperFunctions';

export default async function handler(req, res) {
  // Get task ID from url params
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a task by its ID */:
      try {
        const task = await Task.findById(id);
        if (!task) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a task by its ID */:
      // Calculate task score before updating
      let requestBody = JSON.parse(req.body);
      const { time, urgency, resistance } = requestBody;
      requestBody.score = getTaskScore(time, urgency, resistance);
      try {
        const task = await Task.findByIdAndUpdate(id, requestBody, {
          new: true,
          runValidators: false,
        });
        if (!task) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a task by its ID */:
      try {
        const deletedTask = await Task.deleteOne({ _id: id });
        if (!deletedTask) {
          return res
            .status(400)
            .json({ success: false, message: 'Task could not be deleted' });
        }
        // If task has a habit attached, find that habit and remove the task from tasks array
        if (deletedTask.habit) {
          let changedHabit = await Habit.findByIdAndUpdate(
            { _id: deletedTask.habit },
            { $pull: { tasks: id } }
          );
          console.log(
            `Habit ${changedHabit.name} has been updated. Task id ${id} removed.`
          );
        }
        res.status(200).json({
          success: true,
          data: {},
          message: 'Task was successfully deleted.',
        });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
