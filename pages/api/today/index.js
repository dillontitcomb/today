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
    // GET Today object if it exists - if it doesn't create one
    case 'GET':
      try {
        let day = await Day.findOne({
          user: session.user.userId,
          dateCreated: { $gte: todaysDateToIso },
        });
        console.log(day);
        // If no day was found, create one.
        if (!day) {
          day = await Day.create({
            user: session.user.userId,
            tasks: [],
          });
          console.log(`New day created: ${day}`);
        }
        if (day)
          res.status(200).json({
            success: true,
            data: day,
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
