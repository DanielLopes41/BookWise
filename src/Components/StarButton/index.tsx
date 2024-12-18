import { Star } from 'phosphor-react'
import { LeftHalfStar, RightHalfStar, StarContainer } from './styles'

interface StarButtonProps {
  starValue: number
  index: number
}

export function StarButton({ index, starValue }: StarButtonProps) {
  const isFilledLeft = starValue >= index + 0.5
  const isFilledRight = starValue >= index + 1

  return (
    <StarContainer>
      <LeftHalfStar>
        <Star size={28} weight={isFilledLeft ? 'fill' : 'regular'} />
      </LeftHalfStar>
      <RightHalfStar>
        <Star size={28} weight={isFilledRight ? 'fill' : 'regular'} />
      </RightHalfStar>
    </StarContainer>
  )
}
