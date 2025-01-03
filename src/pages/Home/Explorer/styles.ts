import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const ExplorerMainContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  padding: '$4',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    width: '0px',
    background: 'transparent',
  },

  '@media(max-width: 1600px)': {
    gap: '2rem',
  },
})
export const ExplorerContainer = styled('div', {
  marginTop: '$4',
  display: 'flex',
  flexDirection: 'column',
  marginRight: '20rem',
})
export const Topbar = styled('div', {
  marginTop: '$10',
  display: 'flex',
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
  div: {
    input: {
      marginRight: '-20px',
      width: '433px',
      marginLeft: 'auto',
    },
  },
})
export const Trigger = styled(Dialog.Trigger, {
  all: 'unset',
})
export const CategoryNavigation = styled('nav', {
  display: 'flex',
  gap: '$4',
  height: '40px !important',
  marginTop: '$10',
})
export const BookList = styled('div', {
  marginTop: '$10',
  display: 'grid',
  gap: '$5',
  gridTemplateColumns: '1fr 1fr 1fr',
})
export const BookCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})
