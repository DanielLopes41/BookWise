import { styled } from '@stitches/react'

export const StarContainer = styled('article', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
export const LeftHalfStar = styled('section', {
  clipPath: 'inset(0 50% 0 0)',
  backgroundColor: 'inherit',
  color: '$purple100',
})
export const RightHalfStar = styled('nav', {
  clipPath: 'inset(0 0 0 50%)',
  backgroundColor: 'inherit',
  color: '$purple100',
})
