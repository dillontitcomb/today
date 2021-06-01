import { getSession } from 'next-auth/client';
import Habit from '../../../models/Habit';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  console.log('Request has been sent to api/habits/active');
  // Verify Sign In
  const session = await getSession({ req });
  if (!session)
    return res.status(404).json({
      success: false,
      message: 'User must be signed in to access habits.',
    });

  await dbConnect();

  const { method } = req;
  switch (method) {
    // GET by ID
    // Returns all user's active habits (have tasks)
    case 'GET':
      try {
        const habits = await Habit.find({
          user: session.user.userId,
          tasks: { $exists: true, $not: { $size: 0 } },
        }).populate('tasks');
        res.status(200).json({ success: true, data: habits });
      } catch (error) {
        res.status(404).json({
          success: false,
          message: 'Habits could not be found',
        });
      }
      break;
  }
}
