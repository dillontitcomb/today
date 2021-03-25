import { getSession } from 'next-auth/client';
import Task from '../../../models/Task';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  console.log('Request has been sent to api/tasks');
  // Verify Sign In
  const session = await getSession({ req });
  if (!session)
    return res.status(404).json({
      success: false,
      message: 'User must be signed in to access tasks.',
    });

  await dbConnect();

  const { method } = req;
  switch (method) {
    // GET by ID
    // Returns all user's tasks
    case 'GET':
      try {
        const tasks = await Task.find({ user: session.user.userId });
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(404).json({
          success: false,
          message: 'Tasks could not be found',
        });
      }
      break;
    // POST
    // Creates a new task linked to user's ID
    case 'POST':
      console.log('Attempting to POST to api/tasks');
      let requestBody = JSON.parse(req.body);
      requestBody.user = session.user.userId;
      try {
        const task = await Task.create(requestBody);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
