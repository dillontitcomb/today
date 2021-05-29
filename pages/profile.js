import { useFormik } from 'formik';
import { useSession } from 'next-auth/client';
import { useEffect } from 'react';
import { Button } from '../components/layout/Buttons';
import { Form, TextInput } from '../components/layout/Forms';
import useGlobalContext from '../hooks/useGlobalContext';

export default function profile() {
  const [session, loading] = useSession();
  const { profile, getProfile, updateProfile } = useGlobalContext();

  useEffect(() => {
    getProfile();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: profile.firstName ? profile.firstName : '',
      lastName: profile.lastName ? profile.lastName : '',
    },

    onSubmit: async (values) => {
      await updateProfile(values);
    },
  });

  return (
    <div>
      <h1>Your Profile Page</h1>
      <h4>
        Welcome, {profile.firstName ? profile.firstName : 'buddy old pal'}!
      </h4>
      <Form onSubmit={formik.handleSubmit}>
        <h3>
          First Name:
          <TextInput
            id='firstName'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          ></TextInput>
        </h3>
        <h3>
          Last Name:
          <TextInput
            id='lastName'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          ></TextInput>
        </h3>
        <Button type='submit'>Update Profile</Button>
      </Form>
    </div>
  );
}
