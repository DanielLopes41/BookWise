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
import { api } from '@/pages/api/axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useSession } from 'next-auth/react'
export default function Explorer() {
  const [currentCategory, setCurrentCategory] = useState('Tudo')
  const [searchBarChange, setSearchBarChange] = useState('')
  const [searchParam, setSearchParam] = useState('')
  const { status } = useSession()
  const router = useRouter()
  useEffect(() => {
    const Token = Cookies.get('GuestToken') || false
    if (status === 'unauthenticated' && !Token) {
      router.push('/')
    }
  }, [status, router])
  const { data: Books = [] } = useQuery({
    queryKey: ['books', currentCategory],
    queryFn: async () => {
      const response = await api.get('/books', {
        params: {
          category: currentCategory,
        },
      })
      return response.data
    },
  })
  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category)
  }

  const handleSearchParam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarChange(e.target.value)
  }

  const clearSearchBarChange = () => {
    setSearchBarChange('')
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setSearchParam(searchBarChange)
      clearSearchBarChange()
    }
  }

  const filteredBooks = searchParam
    ? Books.filter(
        (book) =>
          book.name.toLowerCase().includes(searchParam.toLowerCase()) ||
          book.author.toLowerCase().includes(searchParam.toLowerCase()),
      )
    : Books

  const getBookColumns = (books: any[]) => {
    const columns = []
    for (let i = 0; i < books.length; i += 5) {
      columns.push(books.slice(i, i + 5))
    }
    return columns
  }

  const columns = getBookColumns(filteredBooks)
  const session = useSession()
  return (
    <ExplorerMainContainer>
      <Aside />
      <ExplorerContainer>
        <Topbar>
          <p>
            <Binoculars size={32} />
            Explorar
          </p>
          <SearchBar
            value={searchBarChange}
            onchange={handleSearchParam}
            onkeydown={handleKeyDown}
            placeholder="Buscar livro ou autor"
          />
        </Topbar>
        <CategoryNavigation>
          <CategoryButton
            onClick={() => handleCategoryClick('Tudo')}
            isSelected={currentCategory === 'Tudo'}
            Category="Tudo"
          />
          <CategoryButton
            onClick={() => handleCategoryClick('Programação')}
            isSelected={currentCategory === 'Programação'}
            Category="Computação"
          />
          <CategoryButton
            onClick={() => handleCategoryClick('Educação')}
            isSelected={currentCategory === 'Educação'}
            Category="Educação"
          />
          <CategoryButton
            onClick={() => handleCategoryClick('Ficção')}
            isSelected={currentCategory === 'Ficção'}
            Category="Fantasia"
          />
          <CategoryButton
            onClick={() => handleCategoryClick('Geek')}
            isSelected={currentCategory === 'Geek'}
            Category="Ficção científica"
          />
          <CategoryButton
            onClick={() => handleCategoryClick('Terror')}
            isSelected={currentCategory === 'Terror'}
            Category="Horror"
          />
          <CategoryButton
            onClick={() => handleCategoryClick('HQs')}
            isSelected={currentCategory === 'HQs'}
            Category="HQs"
          />
          <CategoryButton
            onClick={() => handleCategoryClick('Suspense')}
            isSelected={currentCategory === 'Suspense'}
            Category="Suspense"
          />
        </CategoryNavigation>
        <BookList>
          {columns.map((column, colIndex) => (
            <BookCol key={colIndex}>
              {column.map((book, bookIndex) => (
                <Dialog.Root key={bookIndex}>
                  <Trigger>
                    <BookCard
                      author={book.author}
                      coverUrl={book.cover_url}
                      name={book.name}
                      IsRead={
                        book.ratings?.filter(
                          (rating) => rating.user.id === session.data?.user.id,
                        ).length > 0
                      }
                    />
                  </Trigger>
                  <BooksDialog
                    author={book.author}
                    coverUrl={book.cover_url}
                    name={book.name}
                    category={book.categories}
                    bookId={book.id}
                  />
                </Dialog.Root>
              ))}
            </BookCol>
          ))}
        </BookList>
      </ExplorerContainer>
    </ExplorerMainContainer>
  )
}
