import { MagnifyingGlass } from 'phosphor-react'
import { SearchBarC, SearchBarContainer } from './styles'

export interface SearchBarProps {
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onkeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void
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
