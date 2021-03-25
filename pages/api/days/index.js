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
  switch (method) {
    // Get current user's days
    case 'GET':
      try {
        const days = await Day.find({ user: session.user.userId });
        res.status(200).json({
          success: true,
          data: days,
          message: 'All days retrieved.',
        });
      } catch (error) {
        res
          .status(404)
          .json({ success: false, message: 'Days could not be found.' });
      }
      break;
    // Create new day for current user
    case 'POST':
      const requestBody = JSON.parse(req.body);
      requestBody.user = session.user.userId;
      console.log(requestBody);
      try {
        const day = await Day.create(requestBody);
        res.status(201).json({ success: true, data: day });
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({ success: false, message: error });
  }
}
