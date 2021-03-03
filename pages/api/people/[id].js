import Person from '../../../models/Person';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const person = await Person.findById(id);
        if (!person) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: person });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const person = await Person.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!person) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: person });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedperson = await Person.deleteOne({ _id: id });
        if (!deletedperson) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
