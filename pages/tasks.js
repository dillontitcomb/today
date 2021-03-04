import { getSession } from 'next-auth/client';

export default function tasks({ user }) {
  return (
    <>
      <h1>This is your tasks dashboard!</h1>
      <p>Welcome, {user.email}</p>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}
