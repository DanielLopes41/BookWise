import { Button } from './styles'

export interface CategoryButtonProps {
  Category: string
  isSelected?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
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
