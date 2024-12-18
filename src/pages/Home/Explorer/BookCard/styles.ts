import { styled } from '@stitches/react'

export const BookCardContainer = styled('div', {
  backgroundColor: '$gray700',
  position: 'relative',
  padding: '$4 $5',
  height: 184,
  div: {
    gap: '$5',
    justifyContent: 'center',
    alignItems: 'normal',
    padding: '0 $1 2.8rem $1',
    img: {
      width: 108,
      height: 152,
    },
  },
  borderRadius: '8px',
  '& :hover': {
    cursor: 'pointer',
  },
})

export const BookCardContent = styled('div', {
  display: 'flex',
  width: '17.5rem',
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '0',
    span: {
      section: {
        marginRight: '-8px',
      },
      nav: {
        marginLeft: '-8px',
      },
    },
  },
  image: {
    width: 108,
    height: 152,
  },
})
export const TextContainer = styled('div', {
  padding: '0 $4 4.3rem 0 !important',
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
