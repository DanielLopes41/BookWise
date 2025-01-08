import { styled } from '@stitches/react'
export const CommentContainer = styled('div', {
  backgroundColor: '$gray600',
  borderRadius: '8px',
  width: '90%',
  margin: '0 auto',
})
export const CommentContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  padding: '$6',
  height: '80%',
})
export const AvatarContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  div: {
    h1: {
      fontSize: '$md',
      color: '$gray100',
    },
    p: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
  span: {
    marginLeft: 'auto',
    section: {
      marginRight: '-8px',
    },
    nav: {
      marginLeft: '-9px',
    },
  },

  img: {
    width: '40px',
    height: '40px',
    borderRadius: '$full',
    border: 'solid black 1px',
  },
})
export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',
  overflowWrap: 'break-word',
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
  gap: '$5',
  justifyContent: 'space-between',
  img: {
    height: '100%',
    borderRadius: '4px',
    width: '6.75rem',
  },
})
