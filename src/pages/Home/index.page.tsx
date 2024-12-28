import {
  BookListContainer,
  CommentList,
  CommentListContainer,
  HomeContainer,
  LastReadingContainer,
} from './styles'

import { CaretRight, ChartLineUp } from 'phosphor-react'
import { Comment } from './Comment'
import Aside from '@/Components/Aside'
import { LastReading } from '@/Components/LastReading'
import { HomeBookCard } from './HomeBookCard'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { api } from '../api/axios'
import Cookies from 'js-cookie'
export default function Home() {
  const { status } = useSession()
  const router = useRouter()
  useEffect(() => {
    const Token = Cookies.get('GuestToken') || false
    if (status === 'unauthenticated' && !Token) {
      router.push('/')
    }
  }, [status, router])

  const { data: Ratings } = useQuery({
    queryKey: ['ratings'],
    queryFn: async () => {
      const response = await api.get(`/users/ratings`)
      return response.data
    },
  })
  const { data: OwnRatings } = useQuery({
    queryKey: ['OwnRatings'],
    queryFn: async () => {
      const response = await api.get(`/users/ratings/userRatings`)
      return response.data
    },
  })
  const { data: Books = [] } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await api.get(`/books`)
      return response.data
    },
  })
  const lastRating = OwnRatings?.[0]
  return (
    <HomeContainer>
      <Aside />
      <CommentListContainer>
        <h1>
          <ChartLineUp /> Início
        </h1>
        {lastRating && (
          <LastReadingContainer>
            <span>
              <p>Sua última leitura</p>
              <button>
                <h1>
                  Ver Todas <CaretRight size={16} />
                </h1>
              </button>
            </span>
            <LastReading
              Author={lastRating.author}
              Rate={lastRating.rate}
              Title={lastRating.title}
              content={lastRating.description}
              coverUrl={lastRating.coverUrl}
              createdAt={lastRating.created_at}
              key={lastRating.id}
            />
          </LastReadingContainer>
        )}
        <CommentList>
          <span>
            <p>Avaliações mais recentes</p>
          </span>
          {Ratings?.map((rating, index) => (
            <Comment
              author={rating.author}
              avatarUrl={rating.avatarUrl}
              coverUrl={rating.coverUrl}
              description={rating.description}
              name={rating.name}
              createdAt={rating.created_at}
              rate={rating.rate}
              title={rating.title}
              key={index}
            />
          ))}
        </CommentList>
      </CommentListContainer>
      <BookListContainer>
        <span>
          <p>Livros populares</p>
          <button>
            <h1>
              Ver todos <CaretRight size={16} />
            </h1>
          </button>
        </span>
        {Books.slice(0, 4).map((book) => {
          const averageRate =
            book.ratings && book.ratings.length > 0
              ? book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
                book.ratings.length
              : 0
          return (
            <HomeBookCard
              Author={book.author}
              coverUrl={book.cover_url}
              Rate={averageRate}
              Title={book.name}
              key={book.id}
            />
          )
        })}
      </BookListContainer>
    </HomeContainer>
  )
}
