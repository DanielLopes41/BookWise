import { MagnifyingGlass } from 'phosphor-react'
import { SearchBarC, SearchBarContainer } from './styles'
export interface SearchBarProps {
  onchange: () => void
  onkeydown: () => void
  value: string
  placeholder: string
}
export function SearchBar({
  onchange,
  onkeydown,
  value,
  placeholder,
}: SearchBarProps) {
  return (
    <SearchBarContainer>
      <SearchBarC
        value={value}
        onKeyDown={onkeydown}
        onChange={onchange}
        placeholder={placeholder}
      />
      <MagnifyingGlass size={20} />
    </SearchBarContainer>
  )
}
