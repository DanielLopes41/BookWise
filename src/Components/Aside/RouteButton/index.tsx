import { styled } from '@stitches/react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface RouteButtonProps {
  route: string
  icon: ReactNode
  label: string
  onClick?: () => void
}

const Button = styled('button', {
  all: 'unset',
  color: '$gray400',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
  padding: '$2 0',
  cursor: 'pointer',
  '&:hover': {
    color: '$gray100',
    p: {
      color: '$gray100',
    },
  },
  variants: {
    active: {
      true: {
        svg: {
          color: '$gray100',
        },
        p: {
          color: '$gray100',
        },
      },
      false: {
        color: '$gray400',
        p: {
          color: '$gray400',
        },
      },
    },
  },
})

export function RouteButton({ route, icon, label, onClick }: RouteButtonProps) {
  const router = useRouter()
  const isActive = router.pathname === route

  const handleClick = async () => {
    if (onClick) {
      onClick()
    }
    await router.push(route)
  }

  return (
    <Button active={isActive} onClick={handleClick}>
      {icon}
      <p>{label}</p>
    </Button>
  )
}
