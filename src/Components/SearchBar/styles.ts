import { styled } from '@stitches/react'
export const SearchBarC = styled('input', {
  padding: '0.875rem $5',
  borderRadius: '4px',
  gap: '0.5rem',
  backgroundColor: '$gray800',
  border: 'solid 1px $gray500',
  width: 433,
  height: 48,
  color: '$gray400',
  fontSize: '$sm',
  alignItems: 'center',
  fontFamily: '$default',
})
export const SearchBarContainer = styled('div', {
  svg: {
    position: 'relative',
    color: '$gray500',
    top: 5,
    right: 40,
  },
})
