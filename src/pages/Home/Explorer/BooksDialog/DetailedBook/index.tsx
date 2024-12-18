import Image from 'next/image'
import Bookimg from '../../../../../../images/14-habitos-de-desenvolvedores-altamente-produtivos.png'

import {
  AvatarSection,
  BookInfo,
  Container,
  Content,
  Details,
  Rating,
  TextSection,
} from './styles'
import { StyledStar } from '@/Components/StyledStar'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import { StarCollection } from '@/Components/StarCollection'

export function DetailedBook() {
  return (
    <Container>
      <Content>
        <AvatarSection>
          <Image src={Bookimg} width={172} height={242} alt="Capa do livro" />
          <Details>
            <BookInfo>
              <h1>Nome do livro</h1>
              <p>Autor</p>
            </BookInfo>
            <div>
              <StarCollection StarNumber={4} />
              <p>3 avaliações</p>
            </div>
          </Details>
        </AvatarSection>
        <TextSection>
          <div>
            <section>
              <BookmarkSimple size={24} />
              <span>
                <p>Categoria</p>
                <h1>Computação, educação</h1>
              </span>
            </section>
            <section>
              <BookOpen size={24} />
              <span>
                <p>Páginas</p>
                <h1>160</h1>
              </span>
            </section>
          </div>
        </TextSection>
      </Content>
    </Container>
  )
}
