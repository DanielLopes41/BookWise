import { styled } from '@stitches/react'

export const AvatarBorder = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gradient-vertical',
  borderRadius: '$full',
  img: {
    borderRadius: '$full',
  },
})
