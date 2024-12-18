import Aside from '@/Components/Aside'
import {
  BookCol,
  BookList,
  CategoryNavigation,
  ExplorerContainer,
  ExplorerMainContainer,
  Topbar,
  Trigger,
} from './styles'
import { BookCard } from './BookCard'
import { SearchBar } from '@/Components/SearchBar'
import { Binoculars } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { BooksDialog } from './BooksDialog'
import { CategoryButton } from './CategoryButton'

export default function Explorer() {
  return (
    <ExplorerMainContainer>
      <Aside />
      <ExplorerContainer>
        <Topbar>
          <p>
            <Binoculars size={32} />
            Explorar
          </p>
          <SearchBar />
        </Topbar>
        <CategoryNavigation>
          <CategoryButton Category="Tudo" isSelected={true} />
          <CategoryButton Category="Computação" />
          <CategoryButton Category="Educação" />
          <CategoryButton Category="Fantasia" />
          <CategoryButton Category="Ficção científica" />
          <CategoryButton Category="Horror" />
          <CategoryButton Category="HQs" />
          <CategoryButton Category="Suspense"></CategoryButton>
        </CategoryNavigation>
        <BookList>
          <BookCol>
            {Array.from({ length: 5 }).map((Book, index) => {
              return (
                <Dialog.Root key={index}>
                  <Trigger>
                    <BookCard />
                  </Trigger>
                  <BooksDialog />
                </Dialog.Root>
              )
            })}
          </BookCol>

          <BookCol>
            {Array.from({ length: 5 }).map((Book, index) => {
              return (
                <Dialog.Root key={index}>
                  <Trigger>
                    <BookCard />
                  </Trigger>
                  <BooksDialog />
                </Dialog.Root>
              )
            })}
          </BookCol>
          <BookCol>
            {Array.from({ length: 5 }).map((Book, index) => {
              return (
                <Dialog.Root key={index}>
                  <Trigger>
                    <BookCard />
                  </Trigger>
                  <BooksDialog />
                </Dialog.Root>
              )
            })}
          </BookCol>
        </BookList>
      </ExplorerContainer>
    </ExplorerMainContainer>
  )
}
