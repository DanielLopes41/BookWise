import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  const sessionUserId = session?.user.id
  const ratings = await prisma.rating.findMany()
  const users = await prisma.user.findMany()
  const books = await prisma.book.findMany()
  if (req.method === 'GET') {
    try {
      const OwnRatingsBySessionId = ratings
        .map((rating) => {
          const user = users.find((user) => user.id === rating.user_id)
          const book = books.find((book) => book.id === rating.book_id)

          return {
            ...rating,
            id: user?.id,
            name: user?.name,
            avatarUrl: user?.avatar_url,
            author: book?.author,
            coverUrl: book?.cover_url,
            title: book?.name,
          }
        })
        .filter((rating) => rating !== null && rating.user_id === sessionUserId)
        .reverse()
      return res.status(200).json(OwnRatingsBySessionId)
    } catch (error) {
      console.error('Error fetching ratings:', error)
      return res.status(500).json({ error: 'Failed to fetch ratings' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
