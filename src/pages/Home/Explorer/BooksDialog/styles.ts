import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'
import { Nunito } from 'next/font/google'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: '0',
  fontFamily: nunito.style.fontFamily,
  right: '0',
  background: '$gray800',
  padding: '24px',
  width: 660,
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
export const ContentContainer = styled('div', {
  height: '98%',
  overflowY: 'scroll',
  paddingTop: '$7',
  paddingLeft: '$4',
  position: 'absolute',
  marginRight: '8px',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '$gray700',
    borderRadius: '$full',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '$full',
  },

  '> span': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '0 auto',
    p: {
      fontSize: '$sm',
      color: '$gray200',
    },
    button: {
      all: 'unset',
      color: '$purple100',
      fontSize: '$md',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
})
export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '15px',
  right: '35px',
  border: 'none',
  background: 'inherit',
  color: '$gray400',
  fontSize: '24px',

  '&:hover': {
    color: '#0070f3',
    cursor: 'pointer',
  },
})

export const ModalContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$8 $8',
})
export const CommentList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$6',
})
