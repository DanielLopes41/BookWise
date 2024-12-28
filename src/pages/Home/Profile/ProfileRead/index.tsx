import Image from 'next/image'
import Bookimg from '../../../../../public/images/books/entendendo-algoritmos.jpg'
import {
  AvatarSection,
  BookInfo,
  Container,
  Content,
  Details,
  TextSection,
} from './styles'
import { StarCollection } from '@/Components/StarCollection'
export interface ProfileReadProps {
  Author: string
  Rate: number
  Title: string
  content: string
  coverUrl: string
}
export function ProfileRead({
  Author,
  Rate,
  Title,
  content,
  coverUrl,
}: ProfileReadProps) {
  return (
    <Container>
      <Content>
        <AvatarSection>
          <Image
            src={`${coverUrl.replace('public', '')}`}
            width={98}
            height={134}
            alt="Capa do livro"
          />
          <Details>
            <BookInfo>
              <h1>{Title}</h1>
              <p>{Author}</p>
            </BookInfo>
            <StarCollection NumberOfStarChecked={Rate} />
          </Details>
        </AvatarSection>
        <TextSection>
          <p>{content}</p>
        </TextSection>
      </Content>
    </Container>
  )
}
