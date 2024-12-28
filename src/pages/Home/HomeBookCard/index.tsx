import { StarCollection } from '@/Components/StarCollection'
import {
  TextContainer,
  HomeBookCardContainer,
  HomeBookCardContent,
} from './styles'
import Image from 'next/image'
export interface HomeBookCardProps {
  Title: string
  Author: string
  Rate: number
  coverUrl: string
}
export function HomeBookCard({
  coverUrl,
  Title,
  Author,
  Rate,
}: HomeBookCardProps) {
  console.log(coverUrl)
  return (
    <HomeBookCardContainer>
      <HomeBookCardContent>
        <Image
          src={`${coverUrl.replace('public', '')}`}
          width={64}
          height={94}
          alt="Capa do livro"
        />
        <div>
          <TextContainer>
            <h1>{Title}</h1>
            <p>{Author}</p>
          </TextContainer>
          <StarCollection NumberOfStarChecked={Rate} />
        </div>
      </HomeBookCardContent>
    </HomeBookCardContainer>
  )
}
