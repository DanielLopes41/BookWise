import { styled } from '@stitches/react'

export const BookCardWrapper = styled('div', {
  backgroundColor: '$gray700',
  position: 'relative',
  padding: '$4 $5',
  borderRadius: '8px',
  '&:hover': {
    cursor: 'pointer',
    outline: '2px solid $gray600',
  },
})

export const BookCardContent = styled('div', {
  display: 'flex',
  width: '20rem',
  gap: '$6',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  h1: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '140%',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  p: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '160%',
  },
})
