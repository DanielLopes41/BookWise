import { styled } from '@stitches/react'
export const AuthPageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
})
export const MainContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '$8',
  width: '98vw',
  alignItems: 'inherit',
  margin: '0 auto',
  height: '95vh',
  img: {
    width: '50%',
    height: '95vh',
  },
})
export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  h1: {
    fontFamily: 'default',
    fontSize: '$2xl',
    color: '$gray100',
    lineHeight: '$short',
  },
  p: {
    fontFamily: 'default',
    fontSize: '$md',
    color: '$gray200',
    lineHeight: '$base',
  },
})
export const AuthContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$10',
})
export const AuthButtonContainer = styled('div', {
  display: ' flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$5',
  width: '60%',
})
export const AuthButton = styled('button', {
  all: 'unset',
  backgroundColor: '$gray600',
  borderRadius: '8px',
  padding: '$6 $5',
  display: 'flex',
  gap: '$5',
  alignItems: 'center',
  fontSize: '$lg',
  lineHeight: '$base',
  color: '$gray200',
  img: {
    height: '32px',
    width: '32px',
  },
  '&:hover': {
    cursor: 'pointer',
  },
})
export const AuthError = styled('p', {
  color: '#f75a68',
  marginBottom: '$4',
  fontSize: '$3',
})
