import { useRouter } from 'next/router';
import useSWR from 'swr';
import Form from '../../components/Form';

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPerson = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: person, error } = useSWR(
    id ? `/api/people/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!person) return <p>Loading...</p>;

  const personForm = {
    name: person.name,
    email: person.email,
  };

  return (
    <Form formId='edit-person-form' personForm={personForm} newPerson='false' />
  );
};

export default EditPerson;
