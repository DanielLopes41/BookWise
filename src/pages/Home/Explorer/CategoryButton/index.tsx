import { Button } from './styles'

export interface CategoryButtonProps {
  Category: string
  isSelected?: boolean
}
export function CategoryButton({
  Category,
  isSelected = false,
}: CategoryButtonProps) {
  return <Button isSelected={isSelected}>{Category}</Button>
}
