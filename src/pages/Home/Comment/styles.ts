import { styled } from '@stitches/react'
export const CommentContainer = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '8px',
  width: '65%',
  height: '18rem',
})
export const CommentContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '95%',
  gap: '$8',
  padding: '$6',
  height: '80%',
})
export const AvatarContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  img: {
    width: '40px',
    height: '40px',
    borderRadius: '$full',
    border: 'solid black 1px',
  },
  span: {
    marginLeft: 'auto',
  },
})
export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  span: {
    h1: {
      fontSize: '$md',
      color: '$gray100',
      fontWeigth: '160%',
    },
    p: {
      fontSize: '$sm',
      color: '$gray400',
      fontWeigth: '160%',
    },
  },
  '> p': {
    color: '$gray300',
    fontWeigth: '160%',
  },
})
export const TextSection = styled('div', {
  display: 'flex',
  width: '90%',
  gap: '$5',
  justifyContent: 'space-between',
  img: {
    height: '100%',
    borderRadius: '4px',
    width: '6.75rem',
  },
})
