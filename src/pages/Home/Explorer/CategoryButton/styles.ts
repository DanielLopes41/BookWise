import { styled } from '@stitches/react'

export const Button = styled('button', {
  variants: {
    isSelected: {
      true: {
        all: 'unset',
        borderRadius: '$full',
        padding: '$2 $4',
        alignItems: 'center',
        backgroundColor: '$purple200',
        color: '$gray100',
      },
      false: {
        all: 'unset',
        border: '1px solid $purple100',
        borderRadius: '$full',
        padding: '$2 $4',
        alignItems: 'center',
        backgroundColor: 'inherit',
        color: '$purple100',
      },
    },
  },
})
