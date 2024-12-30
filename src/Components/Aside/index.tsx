import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import BookWiseLogo from '../../../Logo/Logo.jpg'
import Image from 'next/image'
import { AsideContainer } from './styles'
import { Avatar } from '../Avatar'
import { RouteIndicator } from '../RouteIndicator'
import { signOut, useSession } from 'next-auth/react'
import Cookies from 'js-cookie'
import AuthDialog from '@/pages/Home/Explorer/AuthDialog'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { RouteButton } from './RouteButton'
import { useRouter } from 'next/router'

export default function Aside() {
  const { pathname } = useRouter()
  const session = useSession()
  const { status } = session
  const [Token, setToken] = useState(false)

  useEffect(() => {
    const tokenFromCookies = Cookies.get('GuestToken')
    setToken(!!tokenFromCookies)

    if (status === 'authenticated') {
      Cookies.remove('GuestToken')
      setToken(false)
    }
  }, [status])
  return (
    <AsideContainer>
      <section>
        <Image src={BookWiseLogo} alt="" width={130} quality={100} />
        <div>
          <section>
            <RouteIndicator display={pathname === '/Home'} />
            <RouteButton
              route="/Home"
              icon={<ChartLineUp size={24} />}
              label="Início"
            />
          </section>
          <section>
            <RouteIndicator display={pathname === '/Home/Explorer'} />
            <RouteButton
              route="/Home/Explorer"
              icon={<Binoculars size={24} />}
              label="Explorar"
            />
          </section>
          <section>
            {Token ? null : (
              <>
                <RouteIndicator display={pathname === '/Home/Profile'} />
                <RouteButton
                  route="/Home/Profile"
                  icon={<User size={24} />}
                  label="Perfil"
                />
              </>
            )}
          </section>
        </div>
      </section>
      {Token ? (
        <span>
          <p>Fazer Login</p>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <SignIn color="#50B2C0" size={20} />
              </button>
            </Dialog.Trigger>
            <AuthDialog />
          </Dialog.Root>
        </span>
      ) : null}
      {status === 'authenticated' ? (
        <span>
          <Avatar
            src={session?.data?.user.avatar_url}
            alt="Imagem do usuário"
            width={32}
            height={32}
          />
          {session?.data?.user.name}
          <button
            onClick={() => {
              signOut()
            }}
          >
            <SignOut size={20} color="#E25858" />
          </button>
        </span>
      ) : null}
    </AsideContainer>
  )
}
