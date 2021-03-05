import { useFormik } from 'formik';

export default function AddTask() {
  const formik = useFormik({
    initialValues: {
      name: '',
      time: 30,
      resistance: 1,
      urgency: 1,
      recurring: false,
      status: 'incomplete',
    },
  });
}
