import { useFormik } from 'formik';
import { useSession } from 'next-auth/client';
import { Button } from '../components/layout/Buttons';
import { Form, TextInput } from '../components/layout/Forms';
import useProfile from '../hooks/useProfile';
import { fetcher } from '../utils/helperFunctions';

export default function profile() {
  const [session, loading] = useSession();
  const { profile, profileLoading, profileError } = useProfile();
  console.log(profile);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: profile ? profile.firstName : '',
      lastName: profile ? profile.lastName : '',
    },

    onSubmit: async (values) => {
      const newProfile = await fetcher('/api/profile', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      const { firstName, lastName } = newProfile.data;
      console.log(`New profile created by ${firstName} ${lastName}`);
    },
  });

  return (
    <div>
      <h1>Your Profile Page</h1>
      <h4>Welcome, {session ? session.user.email : 'friend'}!</h4>
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
