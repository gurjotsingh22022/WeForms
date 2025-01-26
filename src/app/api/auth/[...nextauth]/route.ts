import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import { db } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';

export const authOptions: NextAuthOptions = {
  providers: [
    // Email/password authentication
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: { email: credentials?.email },
        });

        if (user && credentials?.password && user.password) {
          const isValid = await compare(credentials.password, user.password);
          if (isValid) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
            };
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

      async profile(profile: any){
        const {email} = profile;

        try
        {
          const user = await db.user.findUnique({
            where: { email: profile?.email },
          });
  
          
          if(!profile)
          {
            throw new Error("Server Error");
          }
  
          if(user)
          {
            if(user.isLoggable)
            {
              return {
                id: user?.id,
                name: user?.name,
                email: user?.email,
                image: user?.image,
                plan: user?.planId
              }
              
            }
            else
            {
              const data = {
                name: profile.name,
                image: profile.picture,
                provider: 'Google',
                provider_user_id: profile.sub,
                isLoggable: true
              }
  
              const userUpdate = await db.user.update({
                where: {id: user.id}, data
              })
  
              const userNew = await db.user.findUnique({
                where: {id: user.id}
              })
  
              return {
                id: userNew?.id,
                name: userNew?.name,
                email: userNew?.email,
                image: userNew?.image,
                plan: userNew?.planId
              }
            }
          }
          else
          {
            
            const Key = uuidv4();
            const data = {
              name: profile.name,
              email: profile.email,
              apiKey: Key,
              image: profile.picture,
              provider: 'Google',
              provider_user_id: profile.sub,
              isLoggable: true,
              planId: 1,
            }
  
            const createNewUser = await db.user.create({
              data
            });
  
            return {
              id: createNewUser?.id,
              name: createNewUser?.name,
              email: createNewUser?.email,
              image: createNewUser?.image,
              plan: createNewUser?.planId
            }
  
          }
        }
        catch(err: any)
        {
          throw new Error("Server Error");
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      async profile(profile: any){
        console.log(profile)
        const {email} = profile;
        if(profile)
        {
          return profile
        }
        return null;
      }
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.X_CLIENT_ID as string,
      clientSecret: process.env.X_SECRET as string,

      async profile(profile, token:any) {
        console.log("challeya")
        console.log(profile)
        return profile;
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
};

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
