import { styled } from '@stitches/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Nunito } from 'next/font/google'
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

export const Content = styled(Dialog.Content, {
  fontFamily: nunito.style.fontFamily,
  backgroundColor: '$gray700',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '3.5rem 4.5rem',
  color: '$gray200',
  position: 'fixed',
  top: '50%',
  gap: '$10',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90%',
  width: '516px',
  textAlign: 'center',
  h1: {
    fontSize: '$md',
  },
  p: {
    fontSize: '$lg',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    button: {
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
      gap: '$5',
      padding: '$5 $6',
      borderRadius: '8px',
      backgroundColor: '$gray600',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
})

export const DialogTitle = styled(Dialog.Title, {
  marginBottom: '10px',
  fontSize: '18px',
  fontWeight: 'bold',
})

export const DialogDescription = styled(Dialog.Description, {
  fontSize: '14px',
  color: 'gray',
  marginBottom: '20px',
})
export const Close = styled(Dialog.Close, {
  all: 'unset',
  color: '$gray400',
  lineHeight: 0,
  backgroundColor: 'inherit',
  position: 'absolute',
  top: 15,
  right: 15,
  padding: '$2',

  '&:hover': {
    borderRadius: '4px',
    backgroundColor: '$gray500',
    cursor: 'pointer',
  },
})
