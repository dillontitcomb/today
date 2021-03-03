import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Person from '../../models/Person';
import dbConnect from '../../utils/dbConnect';

/* Allows you to view person card info and delete person card*/
const PersonPage = ({ person }) => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const handleDelete = async () => {
    const personID = router.query.id;

    try {
      await fetch(`/api/people/${personID}`, {
        method: 'Delete',
      });
      router.push('/');
    } catch (error) {
      setMessage('Failed to delete the person.');
    }
  };

  return (
    <div key={person._id}>
      <div className='card'>
        <div className='main-content'>
          <h2 className='person-name'>{person.name}</h2>
          <p className='owner'>Email: {person.email}</p>
          <div className='btn-container'>
            <Link href='/[id]/edit' as={`/${person._id}/edit`}>
              <button className='btn edit'>Edit</button>
            </Link>
            <button className='btn delete' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const person = await Person.findById(params.id).lean();
  person._id = person._id.toString();

  return { props: { person } };
}

export default PersonPage;
