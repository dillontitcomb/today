import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

const Index = () => {
  const [session, loading] = useSession();
  if (loading) return <p>Loading...</p>;
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
      {session && <Link href={`/tasks`}>To Tasks Page</Link>}
    </>
  );
};

export default Index;
