import { getSession } from 'next-auth/client';
import Profile from '../../../models/Profile';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  console.log('Request made to api/profile');
  const session = await getSession({ req });
  if (!session)
    return res.status(404).json({
      success: false,
      message: 'User must be signed in to access profile information.',
    });

  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const profile = await Profile.findOne({ user: session.user.userId });
        console.log(profile);
        return res.status(200).json({
          success: true,
          data: profile,
          message: 'Profile successfully retrieved.',
        });
      } catch (error) {
        return res
          .status(404)
          .json({ success: false, message: 'Profile could not be found.' });
      }
      break;
    // TODO: change to 'PUT'
    case 'PUT':
      console.log('PUT REQUEST');
      const requestBody = JSON.parse(req.body);
      // Add logged in user's session credentials to request body
      requestBody.user = session.user.userId;
      console.log(requestBody);
      try {
        // Either update an existing profile, or if none exists, create one from the request body
        const profile = await Profile.findOneAndUpdate(
          { user: session.user.userId },
          requestBody,
          { new: true, upsert: true }
        );
        return res.status(201).json({ success: true, data: profile });
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      res.status(400).json({ success: false, message: error });
  }
}
