import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr',
  padding: '$4',
})
export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$10',
  input: {
    marginTop: '$8',
    width: '65%',
  },
  '> p:first-child': {
    display: 'flex',
    fontSize: '$xl',
    gap: '$3',
    alignItems: 'center',
    color: '$gray100',
    svg: {
      color: '$green100',
    },
  },
})
export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
export const ReadsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  marginTop: '$6',
})
export const ReadContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  '> p:first-child': {
    fontSize: '$sm',
    color: '$gray300',
  },
})
export const InfosContainer = styled('div', {
  width: 308,
  marginTop: '6rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$8',
  borderLeft: 'solid $gray700 1px',

  '> div:first-child': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$5',

    '> span:first-child': {
      display: 'flex',
      flexDirection: 'column',
      gap: '$5',
      justifyContent: 'center',
    },

    h1: {
      fontFamily: '$default',
      color: '$gray100',
      fontSize: '$xl',
    },

    p: {
      fontFamily: '$default',
      color: '$gray400',
      fontSize: '$sm',
    },
  },

  '> span:last-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
    div: {
      margin: '$3 auto',
      display: 'flex',
      gap: '$5',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
    },
    svg: {
      color: '$green100',
    },
    h1: {
      fontSize: '$md',
      color: '$gray200',
    },
    p: {
      fontSize: '$sm',
      color: '$gray300',
    },
  },
})
export const Bar = styled('div', {
  padding: '2px $4',
  background: '$gradient-horizontal',
  borderRadius: '999px',
  marginTop: '$6',
})
