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
import { useState } from 'react'

interface Comment {
  TextAreaContent: string
  starValue: number
}

export function BooksDialog() {
  const [newComment, setNewComment] = useState<Comment[]>([])
  const comments = [1, 2, 3, 4, 5]
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ContentContainer>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <ModalContent>
            <DetailedBook />
          </ModalContent>
          <span>
            <p>Avaliações</p>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Avaliar</button>
              </Dialog.Trigger>
              <AuthDialog />
            </Dialog.Root>
          </span>
          <CommentList>
            <WriteComment setNewComment={setNewComment} />
            {newComment.map((comment, index) => (
              <NewCommentCard
                key={index}
                content={comment.TextAreaContent}
                NumberOfStarChecked={comment.starValue}
              />
            ))}
            {comments.map((_, index) => (
              <CommentCard key={index} />
            ))}
          </CommentList>
        </ContentContainer>
      </Content>
    </Dialog.Portal>
  )
}
