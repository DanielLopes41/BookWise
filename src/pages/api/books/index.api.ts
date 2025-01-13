import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const booksWithRatingsAndCategories = await prisma.book.findMany({
        include: {
          ratings: {
            include: {
              user: true,
            },
          },
          categories: {
            include: {
              category: true,
            },
          },
        },
      })

      const formattedBooks = booksWithRatingsAndCategories.map((book) => ({
        ...book,
        categories: book.categories
          ? book.categories.map((cat) => cat.category.name).join(', ')
          : '',
        ratings: book.ratings
          ? book.ratings.map((rating) => ({
              ...rating,
              userName: rating.user?.name,
              avatarUrl: rating.user?.avatar_url,
              createdAt: rating.user?.created_at,
            }))
          : [],
      }))

      return res.status(200).json(formattedBooks)
    } catch (error) {
      console.error('Error fetching books with ratings and categories:', error)
      return res.status(500).json({ error: 'Failed to fetch books' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
