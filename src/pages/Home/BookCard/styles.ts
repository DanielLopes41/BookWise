import { styled } from '@stitches/react'

export const BookCardContainer = styled('div', {
  backgroundColor: '$gray700',
  padding: '$5 $4',
  borderRadius: '8px',
})

export const BookCardContent = styled('div', {
  height: '90%',
  width: '90%',
  display: 'flex',
  gap: '$6',
  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    justifyContent: 'space-between',
  },
})
export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

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
