import Day from '../../../models/Day';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  // Get day ID from url params
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    // Get a day by its ID
    case 'GET':
      try {
        const day = await Day.findById(id).populate('tasks');
        if (!day) {
          return res
            .status(400)
            .json({ success: false, message: 'No day could be found.' });
        }
        res.status(200).json({ success: true, data: day });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT':
      // Edit a day by its ID
      try {
        const day = await Day.findByIdAndUpdate(id, JSON.parse(req.body), {
          new: true,
          runValidators: false,
        }).populate('tasks');
        if (!day) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: day });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
