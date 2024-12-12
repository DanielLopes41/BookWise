import { styled } from '@stitches/react'

export const HomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 1fr',
  width: '90vw',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100vh',
  aside: {
    width: 232,
    height: '94vh',
    display: 'flex',
    justifyContent: 'space-between',
    background: `linear-gradient(180deg, $green300 0%, $purple200 20%, $gray800 70%, $gray700 80%)`,
    borderRadius: '12px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '$10 0',
    'p:first-of-type': {
      color: '$gray200',
      display: 'flex',
      justifyContent: 'space-beetween',
      gap: '$3',
      padding: '$1',
      alignItems: 'center',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-beetween',
      gap: '$10',
      div: {
        marginTop: '$10',
        gap: '$4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-beetween',
        fontSize: '$md',
        lineHeight: '160%',
        'p:first-of-type': {
          color: '$gray100',
          display: 'flex',
          justifyContent: 'space-beetween',
          gap: '$3',
          padding: '$2 0',
        },
        p: {
          color: '$gray400',
          display: 'flex',
          justifyContent: 'space-beetween',
          gap: '$3',
          padding: '$2 0',
        },
      },
    },
  },
})

export const CommentListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  height: '70vh',
  '> h1': {
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
})

export const BookListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
  gap: '$4',
  'span:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    '& p:first-child': {
      fontSize: '$sm',
      color: '$gray100',
      lineHeight: '160%',
    },
    '& p': {
      color: '$purple100',
      display: 'flex',
      alignItems: 'center',
      gap: '$2',
    },
  },
})
