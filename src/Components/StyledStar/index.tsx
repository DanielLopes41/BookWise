import { Star, StarHalf } from 'phosphor-react'
import { StarContainer } from './styles'

interface StarButtonProps {
  starValue: number
  index: number
}

export function StyledStar({ index, starValue }: StarButtonProps) {
  const isHalfStar = starValue >= index && starValue < index + 1
  const isFullStar = starValue >= index + 1

  console.log({
    index,
    starValue,
    isHalfStar,
    isFullStar,
  })

  return (
    <StarContainer>
      {isFullStar ? (
        <Star size={16} weight={isFullStar ? 'fill' : 'regular'} />
      ) : isHalfStar ? (
        <StarHalf size={16} weight={isHalfStar ? 'fill' : 'regular'} />
      ) : (
        <Star size={16} weight="regular" />
      )}
    </StarContainer>
  )
}
