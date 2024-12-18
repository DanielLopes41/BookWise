import { StyledStar } from '../StyledStar'
import { StarCollectionContainer } from './styles'
export interface StarCollectionProps {
  NumberOfStarChecked: number
}
export function StarCollection({ NumberOfStarChecked }: StarCollectionProps) {
  return (
    <StarCollectionContainer>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <StyledStar
            key={index}
            starNumber={NumberOfStarChecked}
            index={index}
          />
        )
      })}
    </StarCollectionContainer>
  )
}
