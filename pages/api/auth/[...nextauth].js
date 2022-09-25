import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   username: { label: 'Username', type: 'text', placeholder: 'email' },
      //   password: { label: 'Password', type: 'password' },
      // },
      async authorize(credentials, req) {

        console.log("authorize...");

        console.log(JSON.stringify(credentials));

        // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

        // const user = credentials;
        console.log("authorize...");
        console.log(JSON.stringify(credentials));

        if(credentials.username === 'aaa@test.com'){
          // Any object returned will be saved in `user` property of the JWT
          return { id: 1, name: 'test', username: credentials.username};
        }else{
          // If you return null or false then the credentials will be rejected
          // return null
          // You can also Reject this callback with an Error or with a URL:
          throw new Error("error message") // Redirect to error page
          // throw "/path/to/redirect"        // Redirect to a URL
        }

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const res = await fetch('/your/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' },
        // });
        //
        // const user = await res.json();
        //
        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user;
        // }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    // signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/register' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("callbacks signIn...");
      console.log(JSON.stringify(user));
      console.log(JSON.stringify(account));
      console.log(JSON.stringify(email));
      console.log(JSON.stringify(credentials));
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("callbacks redirect...");
      console.log("url:"+ url);
      console.log("baseUrl:"+ baseUrl);
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log("callbacks session...");
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("callback jwt...");
      console.log(JSON.stringify(token));
      console.log(JSON.stringify(user));
      console.log(JSON.stringify(account));
      console.log(JSON.stringify(profile));
      console.log(JSON.stringify(isNewUser));
      return token;
    }
  }
});
