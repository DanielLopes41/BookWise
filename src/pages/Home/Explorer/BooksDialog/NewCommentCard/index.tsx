import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import { Avatar } from '@/Components/Avatar'
import { StarCollection } from '@/Components/StarCollection'
export interface NewCommentProps {
  content: string
  NumberOfStarChecked: number
}
export function NewCommentCard({
  content,
  NumberOfStarChecked,
}: NewCommentProps) {
  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Avatar
            src="https://avatars.githubusercontent.com/u/96553464?v=4"
            alt="Imagem do usuário"
            width={40}
            height={40}
          />
          <div>
            <h1>Daniel Lopes</h1>
            <p>Hoje</p>
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
