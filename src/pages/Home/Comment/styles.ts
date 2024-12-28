import { styled } from '@stitches/react'
export const CommentContainer = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '8px',
  width: '65%',
  margin: 'auto',
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
    '& p:first-of-type': {
      color: '$gray100',
      fontSize: '$md',
    },
    '& p:last-of-type': {
      color: '$gray400',
      fontSize: '$sm',
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
})
export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginRight: 'auto',
  section: {
    display: 'flex',
    flexDirection: 'column',
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
