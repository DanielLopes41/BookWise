import Image from 'next/image'
import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import { StarCollection } from '../StarCollection'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export interface LastReadingProps {
  coverUrl: string
  createdAt: string
  content: string
  Author: string
  Title: string
  Rate: number
}
export function LastReading({
  Author,
  Rate,
  Title,
  content,
  coverUrl,
  createdAt,
}: LastReadingProps) {
  return (
    <CommentContainer>
      <CommentContent>
        <TextSection>
          <Image
            src={`${coverUrl.replace('public', '')}`}
            alt="Capa do livro"
            width={108}
            height={152}
          />

          <TextContainer>
            <AvatarContainer>
              <p>
                {formatDistanceToNow(createdAt, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </p>
              <StarCollection NumberOfStarChecked={Rate} />
            </AvatarContainer>
            <span>
              <h1>{Title}</h1>
              <p>{Author}</p>
            </span>
            <p>{content}</p>
          </TextContainer>
        </TextSection>
      </CommentContent>
    </CommentContainer>
  )
}
