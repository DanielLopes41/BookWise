import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import { StyledStar } from '@/Components/StyledStar'
import { Avatar } from '@/Components/Avatar'
import { StarCollection } from '@/Components/StarCollection'
export function CommentCard() {
  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Avatar
            src={'https://avatars.githubusercontent.com/u/96553464?v=4'}
            height={40}
            width={40}
          />
          <div>
            <h1>Daniel Lopes</h1>
            <p>Hoje</p>
          </div>
          <StarCollection NumberOfStarChecked={4} />
        </AvatarContainer>

        <TextSection>
          <TextContainer>
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
