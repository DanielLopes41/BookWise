import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  CommentList,
  Content,
  ContentContainer,
  ModalContent,
  Overlay,
} from './styles'

import { X } from 'phosphor-react'
import { DetailedBook } from './DetailedBook'
import { CommentCard } from './CommentCard'
import AuthDialog from '../AuthDialog'
import { WriteComment } from './WriteComment'
import { NewCommentCard } from './NewCommentCard'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/pages/api/axios'
import { Comment } from '../../Comment'
import { useSession } from 'next-auth/react'

interface Comment {
  TextAreaContent: string
  starValue: number
}

export interface BooksDialogProps {
  name: string
  author: string
  coverUrl: string
  bookId: string
}

export function BooksDialog({
  author,
  coverUrl,
  name,
  bookId,
}: BooksDialogProps) {
  const { data: Books = [] } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await api.get(`/books`)
      return response.data
    },
  })
  const { status } = useSession()
  const session = useSession()
  const currentBook = Books.find((book) => book.name === name)
  const OwnComments = currentBook?.ratings
    ?.filter((rating) => rating.user.id === session.data?.user.id)
    .reverse()
  const CommentsWithoutOwn = currentBook?.ratings
    ?.filter((rating) => rating.user.id !== session.data?.user.id)
    .reverse()
  const [isOpenWriteComment, setOpenWriteComment] = useState(false)
  const averageRate =
    currentBook && currentBook.ratings && currentBook.ratings.length > 0
      ? Number(
          (
            currentBook.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
            currentBook.ratings.length
          ).toFixed(1),
        )
      : 0

  if (!currentBook) {
    return <p>Livro não encontrado.</p>
  }
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
            {isOpenWriteComment ? <WriteComment bookId={bookId} /> : null}
            {OwnComments.map((comment, index) => (
              <NewCommentCard
                createdAt={comment.created_at}
                key={index}
                content={comment.description}
                NumberOfStarChecked={comment.rate}
              />
            ))}
            {CommentsWithoutOwn.map((rating, index) => (
              <CommentCard
                avatarUrl={rating.avatarUrl}
                content={rating.description || ''}
                createdAt={rating.created_at}
                rate={rating.rate}
                userName={rating.userName}
                key={index}
              />
            ))}
          </CommentList>
        </ContentContainer>
      </Content>
    </Dialog.Portal>
  )
}
