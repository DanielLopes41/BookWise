import { styled } from '@stitches/react'

export const Container = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '8px',
  width: '65%',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  padding: '$6',
})

export const AvatarSection = styled('div', {
  display: 'flex',
  gap: '$6',

  img: {
    borderRadius: '4px',
  },
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  justifyContent: 'space-between',
  span: {
    section: {
      marginRight: '-8px',
    },
    nav: {
      marginLeft: '-9px',
    },
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',

  h1: {
    color: '$gray100',
    fontSize: '$lg',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const Rating = styled('span', {
  display: 'flex',
  gap: '$1',
})

export const TextSection = styled('div', {
  color: '$gray300',
})
