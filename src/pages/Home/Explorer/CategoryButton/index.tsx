import { Button } from './styles'

export interface CategoryButtonProps {
  Category: string
  isSelected?: boolean
}
export function CategoryButton({
  Category,
  isSelected = false,
  onClick,
}: CategoryButtonProps) {
  return (
    <Button onClick={onClick} isSelected={isSelected}>
      {Category}
    </Button>
  )
}
