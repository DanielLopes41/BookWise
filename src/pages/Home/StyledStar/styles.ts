import { styled } from '@stitches/react'
import { Star } from 'phosphor-react'

export const StarComponent = styled(Star, {
  color: '$purple100',

  variants: {
    isFilled: {
      true: { color: '$purple100' },
      false: { color: '$purple100' },
    },
  },

  defaultVariants: {
    isFilled: false,
  },
})
