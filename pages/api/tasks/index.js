import { getSession } from 'next-auth/client';
import Task from '../../../models/Task';
import dbConnect from '../../../utils/dbConnect';
import {mutate} from 'swr'

export default async function handler(req, res) {
  console.log('Request has been sent to api/tasks');
  // Make all endpoints require signin
  const session = await getSession({ req });
  if (!session)
    return res.status(404).json({
      success: false,
      message: 'User must be signed in to access tasks.',
    });

  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const tasks = await Task.find({ user: session.user.userId });
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        return res.status(404).json({
          success: false,
          message: 'Tasks could not be found',
        });
      }
      break;

    // Private create task
    case 'POST':
      console.log('Attempting to POST to api/tasks');
      let bodyObject = JSON.parse(req.body);
      bodyObject.user = session.user.userId;
      console.log(bodyObject);
      try {
        const task = await Task.create(bodyObject);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
