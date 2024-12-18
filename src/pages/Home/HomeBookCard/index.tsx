import { StarCollection } from '@/Components/StarCollection'
import {
  TextContainer,
  HomeBookCardContainer,
  HomeBookCardContent,
} from './styles'
import Image from 'next/image'
import BookImg from '../../../../images/codigo-limpo.png'

export function HomeBookCard() {
  return (
    <HomeBookCardContainer>
      <HomeBookCardContent>
        <Image src={BookImg} alt="Capa do livro" />
        <div>
          <TextContainer>
            <h1>A revolução dos bichos</h1>
            <p>George Orwell</p>
          </TextContainer>
          <StarCollection NumberOfStarChecked={4} />
        </div>
      </HomeBookCardContent>
    </HomeBookCardContainer>
  )
}
