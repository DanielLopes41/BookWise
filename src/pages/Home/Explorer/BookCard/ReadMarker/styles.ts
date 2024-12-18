import { styled } from '@stitches/react'

export const ReadMarkerContainer = styled('div', {
  variants: {
    IsRead: {
      true: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '24px',
        width: '53px',
        right: 0,
        top: 0,
        borderTopRightRadius: '8px',
        borderBottomLeftRadius: '4px',
        padding: '1px $3 !important',
        backgroundColor: '$green300',
        fontSize: '$xs',
        fontWeight: 'bold',

        color: '$green100',
        p: {
          alignSelf: 'center',
        },
      },
      false: {
        display: 'none',
      },
    },
  },
})
