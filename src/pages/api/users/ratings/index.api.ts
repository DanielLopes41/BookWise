import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, buildNextAuthOptions())
  if (req.method === 'GET') {
    try {
      const ratings = await prisma.rating.findMany({
        orderBy: { created_at: 'desc' },
      })
      const users = await prisma.user.findMany()
      const books = await prisma.book.findMany()

      const completeRatings = ratings.map((rating) => {
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
      return res.status(200).json(completeRatings)
    } catch (error) {
      console.error('Error fetching ratings:', error)
      return res.status(500).json({ error: 'Failed to fetch ratings' })
    }
  }
  if (req.method === 'POST') {
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    try {
      const { bookId, userId, rate, description } = req.body

      if (!bookId || !userId || !rate) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const bookExists = await prisma.book.findUnique({ where: { id: bookId } })
      const userExists = await prisma.user.findUnique({ where: { id: userId } })
      if (!bookExists) {
        return res.status(404).json({ error: 'Book not found' })
      }
      if (!userExists) {
        return res.status(404).json({ error: 'User not found' })
      }

      const newRating = await prisma.rating.create({
        data: {
          rate,
          description,
          user_id: userId,
          book_id: bookId,
        },
      })

      return res
        .status(201)
        .json({ message: 'Rating created successfully', newRating })
    } catch (error) {
      console.error('Error creating rating:', error)
      return res.status(500).json({ error: 'Failed to create rating' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
