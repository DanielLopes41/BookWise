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
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useSession } from 'next-auth/react'
import { GetStaticProps } from 'next'

interface Rating {
  user: {
    id: string
  }
}

interface Book {
  id: number
  author: string
  cover_url: string
  name: string
  categories: string[]
  ratings: Rating[]
}

export default function Explorer({ Books }: { Books: Book[] }) {
  const [postValue, setPostValue] = useState<number>(0)
  const [currentCategory, setCurrentCategory] = useState<string>('Tudo')
  const [searchBarChange, setSearchBarChange] = useState<string>('')
  const [searchParam, setSearchParam] = useState<string>('')
  const { status, data: sessionData } = useSession()
  const router = useRouter()
  useEffect(() => {
    const cookieValue = Cookies.get('PostLimit')
    setPostValue(Number(cookieValue))
  }, [])
  useEffect(() => {
    const Token = Cookies.get('GuestToken') || false
    if (status === 'unauthenticated' && !Token) {
      router.push('/')
    }
  }, [status, router])

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category)
  }

  const handleSearchParam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarChange(e.target.value)
  }

  const clearSearchBarChange = () => {
    setSearchBarChange('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setSearchParam(searchBarChange)
      clearSearchBarChange()
      if (searchBarChange === '') {
        setCurrentCategory('Tudo')
      }
    }
  }
  const filteredBooksByCategory =
    currentCategory === 'Tudo'
      ? Books
      : Books.filter((book) => book.categories.includes(currentCategory))
  const filteredBooks = searchParam
    ? Books.filter(
        (book) =>
          book.name.toLowerCase().includes(searchParam.toLowerCase()) ||
          book.author.toLowerCase().includes(searchParam.toLowerCase()),
      )
    : false

  const getBookColumns = (books: Book[]): Book[][] => {
    const columns: Book[][] = []
    for (let i = 0; i < books.length; i += 5) {
      columns.push(books.slice(i, i + 5))
    }
    return columns
  }

  const columns = getBookColumns(filteredBooks || filteredBooksByCategory)

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
              {column.map((book) => (
                <Dialog.Root key={book.id}>
                  <Trigger>
                    <BookCard
                      author={book.author}
                      coverUrl={book.cover_url}
                      name={book.name}
                      IsRead={book.ratings?.some(
                        (rating) => rating.user.id === sessionData?.user.id,
                      )}
                    />
                  </Trigger>
                  <BooksDialog
                    postValue={postValue}
                    setPostValue={setPostValue}
                    author={book.author}
                    coverUrl={book.cover_url}
                    name={book.name}
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
export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await api.get('/books')
    return {
      props: {
        Books: response.data || [],
      },
    }
  } catch (error) {
    console.error('Erro ao buscar os livros:', error)
    return {
      props: {
        Books: [],
      },
    }
  }
}
