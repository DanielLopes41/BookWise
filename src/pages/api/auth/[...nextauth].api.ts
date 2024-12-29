import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider, { GithubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export function buildNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(prisma),

    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? '',
        allowDangerousEmailAccountLinking: true,
        profile: (profile: GithubProfile) => ({
          id: profile.id.toString(),
          name: profile.name || 'Unknown',
          email: profile.email || 'no-email@example.com',
          avatar_url: profile.avatar_url,
        }),
      }),

      GoogleProvider({
        clientId: process.env.GOOGLE_ID ?? '',
        clientSecret: process.env.GOOGLE_SECRET ?? '',
        allowDangerousEmailAccountLinking: true,
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          },
        },
        profile: (profile: GoogleProfile) => ({
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          avatar_url: profile.picture,
        }),
      }),
    ],

    callbacks: {
      async signIn({ user }) {
        if (!user.email) {
          throw new Error('Email is required')
        }
        return true
      },
      async session({ session, user }) {
        session.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url,
        }
        return session
      },
    },
  }
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, buildNextAuthOptions(req, res))
