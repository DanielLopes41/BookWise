import { styled } from '@stitches/react'

export const HomeBookCardContainer = styled('div', {
  backgroundColor: '$gray700',
  position: 'relative',
  padding: '$4 $5',
  borderRadius: '8px',
  '& :hover': {
    cursor: 'pointer',
  },
})

export const HomeBookCardContent = styled('div', {
  display: 'flex',
  width: '20rem',
  gap: '$6',
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  div: {
    span: {
      section: {
        marginRight: '-8px',
      },
      nav: {
        marginLeft: '-9px',
      },
    },
  },
  image: {
    width: 108,
  },
})
export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  h1: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '140%',
  },
  p: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '160%',
  },
})
