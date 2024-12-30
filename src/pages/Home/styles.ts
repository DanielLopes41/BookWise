import { styled } from '@stitches/react'
import * as Dialog from '@radix-ui/react-dialog'
export const HomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 1fr',
  padding: '$4',
  'overflow-y': 'hidden',
})

export const CommentListContainer = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  marginInline: 'auto',
  gap: '$10',
  height: '70vh',
  div: {
    'span:first-child': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '65%',
      marginInline: 'auto',
      '& button': {
        all: 'unset',
        color: '$purple100',
        display: 'flex',
        alignItems: 'center',
        gap: '$2',
      },
    },
  },
  '> h1': {
    width: '65%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    fontSize: '$2xl',
    color: '$gray100',
    svg: {
      color: '$green100',
    },
  },
  p: {
    fontSize: '$sm',
    color: '$gray100',
    lineHeight: '160%',
  },
})

export const CommentList = styled('span', {
  gap: '$4',
  display: 'flex',

  overflowY: 'scroll',
  flexDirection: 'column',
  paddingBottom: '51rem',
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '& > span:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    marginInline: 'auto',
    width: '65%',
    '& > button:last-child': {
      color: '$purple100',
    },
  },
  button: {
    all: 'unset',
    display: 'flex',
    gap: '$2',
    fontSize: '$sm',
  },
})

export const BookListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '8rem',
  div: {
    img: {
      width: 64,
      height: 94,
    },
  },
  'span:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p:first-child': {
      fontSize: '$sm',
      color: '$gray100',
      lineHeight: '160%',
    },
    '& button': {
      all: 'unset',
      display: 'flex',
      padding: '$2 $3',
      borderRadius: '4px',
      h1: {
        fontSize: '$sm',
        color: '$purple100',
        display: 'flex',
        alignItems: 'center',
        gap: '$2',
        opacity: 1,
      },
      '&:hover': {
        backgroundColor: 'rgba(117, 114, 228, 0.06)',
        cursor: 'pointer',
      },
    },
  },
})
export const LastReadingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: {
    color: '$gray100',
    fontSize: '$sm',
    alignItems: 'center',
  },
  button: {
    marginTop: '$6',
  },
})
export const SeeAllButton = styled('button', {
  all: 'unset !important',
  display: 'flex !important',
  padding: '$2 $3 !important',
  borderRadius: '4px !important',
  '&:hover ': {
    backgroundColor: 'rgba(117, 114, 228, 0.06) !important',
    cursor: 'pointer !important',
  },
  h1: {
    fontSize: '$sm',
    color: '$purple100',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    opacity: 1,
  },
})
export const Trigger = styled(Dialog.Trigger, {
  all: 'unset',
  width: '65%',
})
export const BookCardTrigger = styled(Dialog.Trigger, {
  all: 'unset',
})
