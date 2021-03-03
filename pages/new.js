import Form from '../components/Form';

const NewPerson = () => {
  const personForm = {
    name: '',
    email: '',
  };

  return (
    <Form formId='add-person-form' personForm={personForm} newPerson='true' />
  );
};

export default NewPerson;
