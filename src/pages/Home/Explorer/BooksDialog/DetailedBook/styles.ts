import { styled } from '@stitches/react'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const Container = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '8px',
  width: '100%',
  margin: '0 auto',
  fontFamily: nunito.style.fontFamily,
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
  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    section: {
      marginRight: '-8px',
    },
    nav: {
      marginLeft: '-8px',
    },
  },
  p: {
    fontSize: '$sm',
    color: '$gray400',
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
  div: {
    padding: '$6 0',
    margin: '$0 auto',
    gap: '7.375rem',
    borderTop: '1px solid $gray600',
    display: 'flex',
    section: {
      display: 'flex',
      alignItems: 'center',
      gap: '$4',
      svg: {
        color: '$green100',
      },
      span: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '$1',
        h1: {
          fontSize: '$md',
          color: '$gray200',
          fontFamily: '$default !important',
        },
        p: {
          fontSize: '$sm',
          color: '$gray300',
          fontFamily: '$default !important',
        },
      },
    },
  },
})
