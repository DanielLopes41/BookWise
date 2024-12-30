import { StarCollection } from '@/Components/StarCollection'
import { BookCardWrapper, BookCardContent, BookInfo } from './styles'
import Image from 'next/image'

export interface BookCardProps {
  Title: string
  Author: string
  Rate: number
  coverUrl: string
}

export function HomeBookCard({ coverUrl, Title, Author, Rate }: BookCardProps) {
  return (
    <BookCardWrapper>
      <BookCardContent>
        <Image
          src={`${coverUrl.replace('public', '')}`}
          width={64}
          height={94}
          alt="Capa do livro"
        />
        <div>
          <BookInfo>
            <h1>{Title}</h1>
            <p>{Author}</p>
          </BookInfo>
          <StarCollection NumberOfStarChecked={Rate} />
        </div>
      </BookCardContent>
    </BookCardWrapper>
  )
}
