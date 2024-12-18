import { styled } from '@stitches/react'

export const RouteIndicatorBar = styled('div', {
  variants: {
    display: {
      true: {
        width: '4px',
        height: '24',
        padding: '$3 2px',
        borderRadius: '$full',
        background: '$gradient-vertical',
      },
      false: {
        display: 'none',
      },
    },
  },
})
