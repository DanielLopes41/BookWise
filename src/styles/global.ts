import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: '$default',
  },
  body: {
    backgroundColor: '$gray800',
    '-webkit-font-smoothing': 'antialiased',
  },
})
