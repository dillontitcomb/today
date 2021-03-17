import Habit from '../../../models/Habit';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const habit = await Habit.findById(id);
        if (!habit)
          return res.status(400).json({ success: false, message: error });
        res.status(200).json({ success: true, data: habit });
      } catch (error) {
        return res.status(400).json({ success: false, message: error });
      }
      break;

    case 'PUT':
      try {
        const habit = await Habit.findByIdAndUpdate(
          id,
          JSON.parse(JSON.stringify(req.body)),
          { new: true, runValidators: false }
        );
        if (!habit)
          return res.status(400).json({ success: false, message: error });
        res.status(200).json({ success: true, data: habit });
      } catch (error) {
        return res.status(400).json({ success: false, message: error });
      }
      break;

    case 'DELETE':
      try {
        const deletedHabit = await Habit.deleteOne({ _id: id });
        if (!deletedHabit)
          return res.status(400).json({ success: false, message: error });
        res.status(400).json({
          success: true,
          data: {},
          message: 'Habit was successfully deleted.',
        });
      } catch (error) {
        return res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({
        success: false,
        message: 'There was a problem with the server.',
      });
      break;
  }
}
