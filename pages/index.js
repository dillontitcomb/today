import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import Person from '../models/Person';
import dbConnect from '../utils/dbConnect';

const Index = ({ people }) => {
  const [session, loading] = useSession();
  if (loading) return <p>...Loading...</p>;
  return (
    <>
      <h1>Today</h1>
      <div>
        {!session && (
          <>
            <p>Not Signed In</p>
            <button className='btn' onClick={signIn}>
              Sign In
            </button>
          </>
        )}
        {session && (
          <>
            <p>Signed In</p>
            <button className='btn' onClick={signOut}>
              Log Out
            </button>
          </>
        )}
      </div>
      <div>
        {people.length > 0 &&
          people.map((person) => (
            <div key={person._id} className='card'>
              <p>{person.name}</p>
              <p>{person.email}</p>
              <p>{person._id}</p>
              <Link href={`/${person._id}`}>To Person Page</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const result = await Person.find({});
  const people = result.map((doc) => {
    const person = doc.toObject();
    person._id = person._id.toString();
    return person;
  });
  return { props: { people: people } };
}

export default Index;
