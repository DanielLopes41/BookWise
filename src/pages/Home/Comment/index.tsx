import Image from 'next/image'
import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import Bookimg from '../../../../public/images/books/codigo-limpo.jpg'
import { Avatar } from '@/Components/Avatar'
import { StarCollection } from '@/Components/StarCollection'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export interface CommentProps {
  name: string
  avatarUrl: string
  rate: number
  description: string
  author: string
  coverUrl: string
  title: string
  createdAt: string
}
export function Comment({
  name,
  avatarUrl,
  rate,
  description,
  author,
  coverUrl,
  title,
  createdAt,
}: CommentProps) {
  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Avatar
            src={avatarUrl}
            alt="Imagem do usuário"
            width={40}
            height={40}
          />
          <div>
            <p>{name}</p>
            <p>
              {formatDistanceToNow(createdAt, {
                addSuffix: true,
                locale: ptBR,
              })}
            </p>
          </div>
          <StarCollection NumberOfStarChecked={rate} />
        </AvatarContainer>
        <TextSection>
          <Image
            src={`${coverUrl.replace('public', '')}`}
            width={108}
            height={152}
            quality={100}
            alt="Capa do livro"
          />
          <TextContainer>
            <section>
              <h1>{title}</h1>
              <p>{author}</p>
            </section>
            <p>{description}</p>
          </TextContainer>
        </TextSection>
      </CommentContent>
    </CommentContainer>
  )
}
