import { getSession } from 'next-auth/client';
import Habit from '../../../models/Habit';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session)
    return res.status(404).json({
      success: false,
      message: 'User must be signed in to access habits.',
    });
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
      const requestBody = JSON.parse(req.body);
      // Add logged in user's session credentials to request body
      requestBody.user = session.user.userId;
      // TODO: Calculate totalGoal, currentTotal, habitScore
      try {
        const habit = await Habit.create(requestBody);
        res.status(201).json({ success: true, data: habit });
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({ success: false, message: error });
  }
}
