import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, buildNextAuthOptions())

  const sessionUserId = session?.user.id

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: sessionUserId,
        },
        include: {
          ratings: {
            include: {
              book: {
                include: {
                  categories: {
                    include: {
                      category: true,
                    },
                  },
                },
              },
            },
          },
        },
      })

      if (user) {
        const categoryCounts = new Map<string, number>()

        user.ratings.forEach((rating) => {
          const book = rating.book
          if (book) {
            book.categories.forEach((categoryRelation) => {
              const categoryName = categoryRelation.category.name
              const count = categoryCounts.get(categoryName) || 0
              categoryCounts.set(categoryName, count + 1)
            })
          }
        })

        let mostFrequentCategory = ''
        let maxCount = 0
        categoryCounts.forEach((count, category) => {
          if (count > maxCount) {
            maxCount = count
            mostFrequentCategory = category
          }
        })

        const { totalReadPages, totalReadBooks, totalReadAuthors } =
          user.ratings.reduce(
            (accumulator, rating) => {
              const book = rating.book
              if (book) {
                if (!accumulator.booksSet.has(book.id)) {
                  accumulator.totalReadPages += book.total_pages
                  accumulator.totalReadBooks += 1
                  accumulator.booksSet.add(book.id)
                }

                if (!accumulator.authorsSet.has(book.author)) {
                  accumulator.authorsSet.add(book.author)
                  accumulator.totalReadAuthors += 1
                }
              }
              return accumulator
            },
            {
              totalReadPages: 0,
              totalReadBooks: 0,
              totalReadAuthors: 0,
              booksSet: new Set<string>(),
              authorsSet: new Set<string>(),
            },
          )

        const response = {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            avatarUrl: user.avatar_url,
            created_at: user.created_at,
          },
          stats: {
            totalReadPages,
            totalReadBooks,
            totalReadAuthors,
            mostFrequentCategory,
          },
        }

        return res.status(200).json(response)
      } else {
        return res.status(404).json({ error: 'User not found' })
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
