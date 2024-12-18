import { MagnifyingGlass } from 'phosphor-react'
import { SearchBarC, SearchBarContainer } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarC placeholder="Buscar livro ou autor" />
      <MagnifyingGlass size={20} />
    </SearchBarContainer>
  )
}
