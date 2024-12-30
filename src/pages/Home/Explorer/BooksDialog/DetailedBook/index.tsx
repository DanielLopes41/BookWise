import Image from 'next/image'

import {
  AvatarSection,
  BookInfo,
  Container,
  Content,
  Details,
  TextSection,
} from './styles'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import { StarCollection } from '@/Components/StarCollection'
export interface DetailedBookProps {
  name: string
  author: string
  coverUrl: string
  rate: number
  ratings: number
  pages: number
  category: string[]
}
export function DetailedBook({
  name,
  author,
  coverUrl,
  rate,
  ratings,
  pages,
  category,
}: DetailedBookProps) {
  return (
    <Container>
      <Content>
        <AvatarSection>
          <Image
            src={`${coverUrl.replace('public', '')}`}
            width={172}
            height={242}
            alt="Capa do livro"
          />
          <Details>
            <BookInfo>
              <h1>{name}</h1>
              <p>{author}</p>
            </BookInfo>
            <div>
              <StarCollection NumberOfStarChecked={rate} />
              <p>
                {ratings}
                {ratings > 1 ? ' avaliações' : ' avaliação'}
              </p>
            </div>
          </Details>
        </AvatarSection>
        <TextSection>
          <div>
            <section>
              <BookmarkSimple size={24} />
              <span>
                <p>Categoria</p>
                <h1>{category}</h1>
              </span>
            </section>
            <section>
              <BookOpen size={24} />
              <span>
                <p>Páginas</p>
                <h1>{pages}</h1>
              </span>
            </section>
          </div>
        </TextSection>
      </Content>
    </Container>
  )
}
