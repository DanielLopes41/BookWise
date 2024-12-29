import { Star, StarHalf } from 'phosphor-react'
import { StarContainer } from './styles'

interface StarButtonProps {
  starValue: number
  index: number
}

export function StyledStar({ index, starValue }: StarButtonProps) {
  const isFull = starValue >= index + 1
  const isHalf = starValue >= index + 0.5
  return (
    <StarContainer>
      {isFull ? (
        <Star size={16} weight="fill" />
      ) : isHalf ? (
        <StarHalf size={16} weight="fill" />
      ) : (
        <Star size={16} weight="regular" />
      )}
    </StarContainer>
  )
}
