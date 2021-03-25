import { getSession } from 'next-auth/client';
import Day from '../../../models/Day';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  // Verify Session

  const session = await getSession({ req });
  if (!session)
    return res.status(404).json({
      success: false,
      message: 'User must be signed in to access days.',
    });
  console.log('Request made to api/days');

  await dbConnect();

  //Handle request based on request.method

  const { method } = req;

  // Get Today's date without hours specified
  const todaysDate = new Date();
  todaysDate.setUTCHours(0, 0, 0, 0);
  let todaysDateToIso = todaysDate.toISOString();

  switch (method) {
    // GET Today object if it exists
    case 'GET':
      try {
        const days = await Day.findOne({
          user: session.user.userId,
          dateCreated: { $gte: todaysDateToIso },
        }).populate('tasks');
        console.log(days);
        res.status(200).json({
          success: true,
          data: days,
          message: 'Day retrieved.',
        });
      } catch (error) {
        console.log(error.message);
        res.status(404).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: error });
  }
}
