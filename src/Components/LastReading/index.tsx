import Image from 'next/image'
import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import Bookimg from '../../../images/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { StarCollection } from '../StarCollection'
export function LastReading() {
  return (
    <CommentContainer>
      <CommentContent>
        <TextSection>
          <Image src={Bookimg} alt="Capa do livro" />

          <TextContainer>
            <AvatarContainer>
              <p>Há 2 dias</p>
              <StarCollection NumberOfStarChecked={4} />
            </AvatarContainer>
            <span>
              <h1>Título</h1>
              <p>Autor</p>
            </span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo aut eum assumenda laudantium amet in dolor, maxime sit
              nesciunt repudiandae ex modi recusandae perferendis nisi culpa
              enim odit non consequuntur.
            </p>
          </TextContainer>
        </TextSection>
      </CommentContent>
    </CommentContainer>
  )
}
