import { BookCardContainer, BookCardContent, TextContainer } from './styles'
import Image from 'next/image'
import BookImg from '../../../../images/codigo-limpo.png'
import { StyledStar } from '../StyledStar'
export function BookCard() {
  return (
    <BookCardContainer>
      <BookCardContent>
        <Image src={BookImg} width={64} height={94} alt="Capa do livro" />
        <div>
          <TextContainer>
            <h1>A revolução dos bichos</h1>
            <p>George Orwell</p>
          </TextContainer>
          <span>
            <StyledStar Filled={true} />
            <StyledStar Filled={true} />
            <StyledStar Filled={true} />
            <StyledStar />
            <StyledStar />
          </span>
        </div>
      </BookCardContent>
    </BookCardContainer>
  )
}
