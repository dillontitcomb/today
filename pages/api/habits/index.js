import Habit from '../../../models/Habit';
import dbConnect from '../../../utils/dbConnect';

// TODO: Add session verification

export default async function handler(req, res) {
  console.log('Request made to api/habits');
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const habits = await Habit.find({});
        res.status(200).json({
          success: true,
          data: habits,
          message: 'All habits retrieved.',
        });
      } catch (error) {
        return res
          .status(404)
          .json({ success: false, message: 'Habits could not be found.' });
      }
      break;
    case 'POST':
      const requestBody = JSON.parse(JSON.stringify(req.body));
      console.log(requestBody);
      try {
        const habit = await Habit.create(requestBody);
        res.status(201).json({ success: true, data: habit });
      } catch (error) {
        return res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
}
