import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { api } from '@/pages/api/axios'
import {
  CloseButton,
  CommentList,
  Content,
  ContentContainer,
  ModalContent,
  Overlay,
} from './styles'
import { DetailedBook } from './DetailedBook'
import { CommentCard } from './CommentCard'
import AuthDialog from '../AuthDialog'
import { WriteComment } from './WriteComment'
import { NewCommentCard } from './NewCommentCard'
import Cookies from 'js-cookie'
interface Rating {
  user: {
    id: string
    userName: string
  }
  description: string
  rate: number
  avatarUrl: string
  created_at: string
}

interface Book {
  name: string
  author: string
  coverUrl: string
  bookId: number
  total_pages: number
  categories: string[]
  ratings: Rating[]
}

interface BooksDialogProps {
  name: string
  author: string
  coverUrl: string
  bookId: number
  postValue: number
  setPostValue: React.Dispatch<React.SetStateAction<number>>
}

export function BooksDialog({
  author,
  coverUrl,
  name,
  bookId,
  postValue,
  setPostValue,
}: BooksDialogProps) {
  useEffect(() => {
    const cookieValue = Cookies.get('PostLimit')
    if (!cookieValue) {
      setPostValue(0)
    }
  }, [])
  const { data: books = [] } = useQuery<Book[]>({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await api.get('/books')
      return response.data
    },
  })

  const [isOpenWriteComment, setOpenWriteComment] = useState(false)
  const { status } = useSession()
  const session = useSession()
  const currentBook = books.find((book) => book.name === name)

  if (!currentBook) {
    return <p>Livro não encontrado.</p>
  }

  const OwnComments = currentBook.ratings
    .filter((rating) => rating.user.id === session.data?.user.id)
    .reverse()

  const CommentsWithoutOwn = currentBook.ratings
    .filter((rating) => rating.user.id !== session.data?.user.id)
    .reverse()

  const averageRate =
    currentBook.ratings.length > 0
      ? Number(
          (
            currentBook.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
            currentBook.ratings.length
          ).toFixed(1),
        )
      : 0

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ContentContainer>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <ModalContent>
            <DetailedBook
              name={name}
              author={author}
              coverUrl={coverUrl}
              rate={averageRate}
              ratings={currentBook.ratings.length}
              pages={currentBook.total_pages}
              category={currentBook.categories}
            />
          </ModalContent>
          <span>
            <p>Avaliações</p>
            {status === 'unauthenticated' ? (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>Avaliar</button>
                </Dialog.Trigger>
                <AuthDialog />
              </Dialog.Root>
            ) : (
              <button
                onClick={() => {
                  setOpenWriteComment(!isOpenWriteComment)
                }}
              >
                Avaliar
              </button>
            )}
          </span>
          <CommentList>
            {isOpenWriteComment ? (
              <WriteComment
                postValue={postValue}
                setPostValue={setPostValue}
                bookId={bookId}
              />
            ) : null}
            {OwnComments.map((comment, index) => (
              <NewCommentCard
                key={index}
                createdAt={comment.created_at}
                content={comment.description}
                NumberOfStarChecked={comment.rate}
              />
            ))}
            {CommentsWithoutOwn.map((rating, index) => (
              <CommentCard
                key={index}
                avatarUrl={rating.avatarUrl}
                content={rating.description || ''}
                createdAt={rating.created_at}
                rate={rating.rate}
                userName={rating.user.userName}
              />
            ))}
          </CommentList>
        </ContentContainer>
      </Content>
    </Dialog.Portal>
  )
}
