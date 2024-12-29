import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const ExplorerMainContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  padding: '$4',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
export const ExplorerContainer = styled('div', {
  marginTop: '$4',
})
export const Topbar = styled('div', {
  marginTop: '$10',
  display: 'flex',
  width: '80%',
  justifyContent: 'space-between',
  p: {
    fontFamily: '$default',
    fontSize: '$2xl',
    display: 'flex',
    gap: '$3',
    color: '$gray100',
    svg: {
      color: '$green100',
    },
  },
  '@media (max-width: 1400px)': {
    width: '100%',
  },
})
export const Trigger = styled(Dialog.Trigger, {
  all: 'unset',
})
export const CategoryNavigation = styled('nav', {
  display: 'flex',
  gap: '$4',
  marginTop: '$6',
})
export const BookList = styled('div', {
  marginTop: '$10',
  display: 'grid',
  gap: '$5',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
})
export const BookCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})
