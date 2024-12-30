import { BookCardContainer, BookCardContent, TextContainer } from './styles'
import Image from 'next/image'
import { StarCollection } from '@/Components/StarCollection'
import { ReadMarker } from './ReadMarker'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/pages/api/axios'

interface Rating {
  rate: number
  user: {
    id: number
  }
}

interface Book {
  name: string
  author: string
  cover_url: string
  ratings: Rating[]
}

export interface BookCardProps {
  IsRead?: boolean
  name: string
  author: string
  coverUrl: string
}

export function BookCard({ IsRead, name, author, coverUrl }: BookCardProps) {
  const { data: Books = [] } = useQuery<Book[]>({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await api.get(`/books`)
      return response.data
    },
  })

  const currentBook = Books.find((book) => book.name === name)

  const averageRate =
    currentBook && currentBook.ratings.length > 0
      ? currentBook.ratings.reduce(
          (acc: number, rating: Rating) => acc + rating.rate,
          0,
        ) / currentBook.ratings.length
      : 0

  return (
    <BookCardContainer>
      <ReadMarker IsRead={IsRead} />
      <BookCardContent>
        <Image
          src={`${coverUrl.replace('public', '')}`}
          alt="Capa do livro"
          width={108}
          height={152}
        />
        <div>
          <TextContainer>
            <h1>{name}</h1>
            <p>{author}</p>
          </TextContainer>
          <StarCollection NumberOfStarChecked={averageRate} />
        </div>
      </BookCardContent>
    </BookCardContainer>
  )
}
