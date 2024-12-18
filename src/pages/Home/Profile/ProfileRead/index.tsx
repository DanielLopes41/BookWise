import Image from 'next/image'
import Bookimg from '../../../../../images/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { StyledStar } from '@/Components/StyledStar'
import {
  AvatarSection,
  BookInfo,
  Container,
  Content,
  Details,
  Rating,
  TextSection,
} from './styles'
import { StarCollection } from '@/Components/StarCollection'

export function ProfileRead() {
  return (
    <Container>
      <Content>
        <AvatarSection>
          <Image src={Bookimg} width={98} height={134} alt="Capa do livro" />
          <Details>
            <BookInfo>
              <h1>Nome do livro</h1>
              <p>Autor</p>
            </BookInfo>
            <StarCollection />
          </Details>
        </AvatarSection>
        <TextSection>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            aut eum assumenda laudantium amet in dolor, maxime sit nesciunt
            repudiandae ex modi recusandae perferendis nisi culpa enim odit non
            consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Explicabo aut eum assumenda laudantium amet in dolor, maxime
            sit nesciunt repudiandae ex modi recusandae perferendis nisi culpa
            enim odit non consequuntur.
          </p>
        </TextSection>
      </Content>
    </Container>
  )
}
