import { styled } from '@stitches/react'
export const CommentContainer = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '8px',
  width: '90%',
  margin: '0 auto',
})
export const CommentContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '95%',
  gap: '$8',
  padding: '$6',
  height: '80%',
})
export const AvatarContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  div: {
    display: 'flex',
    alignItems: 'center',
    h1: {
      fontSize: '$md',
      color: '$gray100',
    },
  },
  span: {
    marginLeft: 'auto',
    display: 'flex',
  },
})
export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  span: {
    display: 'flex',
    gap: '$2',
    alignSelf: 'end',
    button: {
      all: 'unset',
      width: '40',
      heigth: '40',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '$1',
      padding: '$2',
      backgroundColor: '$gray600',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  div: {
    position: 'relative',
    p: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      color: '#7C7C8A',
      fontSize: 12,
    },
  },
  textarea: {
    all: 'unset',
    borderRadius: '4px',
    color: '$gray400',
    padding: '0.875rem $5',
    margin: '0 auto',
    backgroundColor: '$gray800',
    width: 460,
    border: '1px solid $gray500',
    overflowWrap: 'break-word',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&:focus': {
      border: '1px solid $green200',
    },
  },
})
export const TextSection = styled('div', {
  display: 'flex',
  width: '90%',
  gap: '$5',
  justifyContent: 'space-between',
  img: {
    height: '100%',
    borderRadius: '4px',
    width: '6.75rem',
  },
})
