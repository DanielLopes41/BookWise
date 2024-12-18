import { BookCardContainer, BookCardContent, TextContainer } from './styles'
import Image from 'next/image'
import BookImg from '../../../../../images/codigo-limpo.png'
import { StarCollection } from '@/Components/StarCollection'
import { ReadMarker, ReadMarkerProps } from './ReadMarker'
export function BookCard({ IsRead, NumberOfStarChecked }: ReadMarkerProps) {
  return (
    <BookCardContainer>
      <ReadMarker IsRead={IsRead} />
      <BookCardContent>
        <Image src={BookImg} alt="Capa do livro" />
        <div>
          <TextContainer>
            <h1>A revolução dos bichos</h1>
            <p>George Orwell</p>
          </TextContainer>
          <StarCollection NumberOfStarChecked={NumberOfStarChecked} />
        </div>
      </BookCardContent>
    </BookCardContainer>
  )
}
