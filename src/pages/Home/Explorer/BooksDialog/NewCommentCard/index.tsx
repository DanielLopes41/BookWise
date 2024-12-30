import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import { Avatar } from '@/Components/Avatar'
import { StarCollection } from '@/Components/StarCollection'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useSession } from 'next-auth/react'
export interface NewCommentProps {
  content: string
  NumberOfStarChecked: number
  createdAt: string
}
export function NewCommentCard({
  content,
  NumberOfStarChecked,
  createdAt,
}: NewCommentProps) {
  const session = useSession()
  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Avatar
            src={session.data?.user.avatar_url || 'unavailable'}
            alt="Imagem do usuário"
            width={40}
            height={40}
          />
          <div>
            <h1>{session.data?.user.name}</h1>
            <p>
              {formatDistance(new Date(createdAt), new Date(), {
                addSuffix: true,
                locale: ptBR,
              })}
            </p>
          </div>
          <StarCollection NumberOfStarChecked={NumberOfStarChecked} />
        </AvatarContainer>

        <TextSection>
          <TextContainer>
            <p>{content}</p>
          </TextContainer>
        </TextSection>
      </CommentContent>
    </CommentContainer>
  )
}
