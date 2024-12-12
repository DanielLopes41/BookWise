import { StarComponent } from './styles'
export interface StyledStarProps {
  Filled?: boolean
}
export function StyledStar({ Filled = false }: StyledStarProps) {
  return <StarComponent weight={Filled ? 'fill' : 'regular'} />
}
