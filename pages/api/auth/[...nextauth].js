import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.MONGODB_URI,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // days*hours*mins*seconds = 30 days
  },
};

export default (req, res) => NextAuth(req, res, options);
