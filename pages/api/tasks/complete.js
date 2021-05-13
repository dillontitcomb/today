import { getSession } from 'next-auth/client';
import Task from '../../../models/Task';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  console.log('Request has been sent to api/tasks/complete');
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
    // Returns all user's completed AND ACTIVE tasks in score desc order
    // This returns only recently completed tasks, while the completed route captures all completed tasks over any period.
    // This allows for the user to 'clear' our their completed tasks every so often.
    case 'GET':
      try {
        const tasks = await Task.find({
          user: session.user.userId,
          complete: true,
          active: true,
        }).sort({
          score: 'desc',
        });
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        res.status(404).json({
          success: false,
          message: 'Tasks could not be found',
        });
      }
      break;
  }
}
