import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'

import { Check, X } from 'phosphor-react'

import Rate from 'antd/lib/rate'
import { StarButton } from '@/Components/StarButton'
import { Avatar } from '@/Components/Avatar'
import { useState } from 'react'
import { api } from '@/pages/api/axios'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { queryClient } from '@/lib/react-query'
export interface setNewCommentProps {
  bookId: number
}

export function WriteComment({ bookId }: setNewCommentProps) {
  const [TextAreaContent, setTextAreaContent] = useState<string>('')
  const [starValue, setStarValue] = useState<number>(1)
  const session = useSession()
  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaContent(e.target.value)
  }
  function handleClearTextArea() {
    setTextAreaContent('')
  }
  const mutation = useMutation({
    mutationFn: async () => {
      const payload = {
        userId: session.data?.user.id,
        bookId,
        rate: starValue,
        description: TextAreaContent,
      }

      const response = await api.post(`/users/ratings`, payload)
      return response.data
    },
    onSuccess: () => {
      handleClearTextArea()
      // @ts-expect-error - Ignoring query key typing issue with invalidateQueries
      queryClient.invalidateQueries(['ratings'])
      // @ts-expect-error - Ignoring query key typing issue with invalidateQueries
      queryClient.invalidateQueries(['books'])
    },
  })
  function handleStarSelect(newValue: number) {
    setStarValue(newValue)
  }
  async function handleSetNewComment() {
    if (TextAreaContent !== '') {
      await mutation.mutate()
    }
  }
  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Avatar
            src={session.data?.user.avatar_url || 'unavailable'}
            width={40}
            height={40}
          />
          <div>
            <h1>{session.data?.user.name}</h1>
          </div>
          <span>
            <Rate
              onChange={handleStarSelect}
              allowHalf
              allowClear={false}
              character={({ index }) => (
                <StarButton index={index!} starValue={starValue} />
              )}
            />
          </span>
        </AvatarContainer>

        <TextSection>
          <TextContainer>
            <div>
              <textarea
                placeholder="Escreva sua avaliação"
                rows={5}
                value={TextAreaContent}
                cols={10}
                onChange={handleTextAreaChange}
                maxLength={450}
              ></textarea>
              <p>{TextAreaContent.length}/450</p>
            </div>

            <span>
              <button onClick={handleSetNewComment}>
                <Check size={24} color="#50B2C0" />
              </button>
              <button onClick={handleClearTextArea}>
                <X size={24} color="#8381D9" />
              </button>
            </span>
          </TextContainer>
        </TextSection>
      </CommentContent>
    </CommentContainer>
  )
}
