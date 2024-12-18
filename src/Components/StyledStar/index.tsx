import { Star } from 'phosphor-react'
import { LeftHalfStar, RightHalfStar, StarContainer } from './styles'
export interface StyledStarProps {
  Filled?: boolean
  starNumber: number
  index: number
}
export function StyledStar({ starNumber, index }: StyledStarProps) {
  const isFilledLeft = starNumber >= index + 0.5
  const isFilledRight = starNumber >= index + 1
  return (
    <StarContainer>
      <LeftHalfStar>
        <Star size={16} weight={isFilledLeft ? 'fill' : 'regular'} />
      </LeftHalfStar>
      <RightHalfStar>
        <Star size={16} weight={isFilledRight ? 'fill' : 'regular'} />
      </RightHalfStar>
    </StarContainer>
  )
}
