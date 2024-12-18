import { styled } from '@stitches/react'

export const StarContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
})
export const LeftHalfStar = styled('button', {
  all: 'unset',
  width: 28,
  marginRight: '-29px',
  clipPath: 'inset(0 50% 0 0)',
  backgroundColor: 'inherit',
  color: '$purple100',
})
export const RightHalfStar = styled('button', {
  width: 28,
  marginLeft: '-29px',
  all: 'unset',
  clipPath: 'inset(0 0 0 50%)',
  backgroundColor: 'inherit',
  color: '$purple100',
})
