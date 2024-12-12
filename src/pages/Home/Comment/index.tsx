import Image from 'next/image'
import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import Bookimg from '../../../../images/arquitetura-limpa.png'
import { StyledStar } from '../StyledStar'
export function Comment() {
  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Image
            src="https://avatars.githubusercontent.com/u/96553464?v=4"
            alt="Imagem do usuário"
            width={32}
            height={32}
            quality={100}
          />
          <div>
            <p>Daniel Lopes</p>
            <p>Hoje</p>
          </div>
          <span>
            <StyledStar Filled={true} />
            <StyledStar Filled={true} />
            <StyledStar Filled={true} />
            <StyledStar Filled={true} />
            <StyledStar />
          </span>
        </AvatarContainer>
        <TextSection>
          <Image src={Bookimg} alt="Capa do livro" />
          <TextContainer>
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
