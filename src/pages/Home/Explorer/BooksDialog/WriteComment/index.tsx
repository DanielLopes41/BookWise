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
export interface setNewCommentProps {
  setNewComment: React.Dispatch<
    React.SetStateAction<{ TextAreaContent: string; starValue: number }[]>
  >
}
export function WriteComment({ setNewComment }: setNewCommentProps) {
  const [TextAreaContent, setTextAreaContent] = useState<string>('')
  const [starValue, setStarValue] = useState<number>(1)
  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaContent(e.target.value)
  }

  function handleStarSelect(newValue: number) {
    setStarValue(newValue)
  }
  function handleSetNewComment() {
    if (TextAreaContent !== '') {
      setNewComment((state) => [{ TextAreaContent, starValue }, ...state])
      handleClearTextArea()
    }
  }
  function handleClearTextArea() {
    setTextAreaContent('')
  }

  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Avatar
            src="https://avatars.githubusercontent.com/u/96553464?v=4"
            width={40}
            height={40}
          />
          <div>
            <h1>Daniel Lopes</h1>
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
