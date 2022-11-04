// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth from "next-auth/next";
// import Login from "../../../src/Components/Login";


// export default NextAuth({
//     providers: [
//         CredentialsProvider({
//             // The name to display on the sign in form (e.g. "Sign in with...")
//             name: "Credentials",
            
//             // credentials: {
//             //   username: { label: "Username", type: "text", placeholder: "jsmith" },
//             //   password: { label: "Password", type: "password" }
//             // },
//             async authorize(credentials, req) {
//               // Add logic here to look up the user from the credentials supplied
//               //const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
//         const { email, password} = credentials
//         console.log(email, password)
//         const user = await Login.findOne({email}).exec();
//         console.log(user)
//               if (user) {
//                 // Any object returned will be saved in `user` property of the JWT
//                 return user
//               } else {
//                 // If you return null then an error will be displayed advising the user to check their details.
//                 return null
        
//                 // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//               }
//             }
//           })
//     ]
// })


import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)