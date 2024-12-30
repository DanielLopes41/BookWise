import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from '@/Components/Avatar'
import { StarCollection } from '@/Components/StarCollection'
export interface CommentCardProps {
  rate: number
  avatarUrl: string
  userName: string
  createdAt: string
  content: string
}
export function CommentCard({
  rate,
  avatarUrl,
  userName,
  createdAt,
  content,
}: CommentCardProps) {
  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Avatar src={avatarUrl} height={40} width={40} />
          <div>
            <h1>{userName}</h1>
            <p>
              {formatDistance(new Date(createdAt), new Date(), {
                addSuffix: true,
                locale: ptBR,
              })}
            </p>
          </div>
          <StarCollection NumberOfStarChecked={rate} />
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
