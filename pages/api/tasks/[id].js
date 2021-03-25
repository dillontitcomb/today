import Task from '../../../models/Task';
import dbConnect from '../../../utils/dbConnect';

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
      try {
        const task = await Task.findByIdAndUpdate(id, JSON.parse(req.body), {
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
        const deletedtask = await Task.deleteOne({ _id: id });
        if (!deletedtask) {
          return res
            .status(400)
            .json({ success: false, message: 'Task could not be deleted' });
        }
        res.status(200).json({
          success: true,
          data: {},
          message: 'Task was successfully deleted.',
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
