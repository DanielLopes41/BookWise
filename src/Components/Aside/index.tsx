import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import BookWiseLogo from '../../../Logo/Logo.png'
import Image from 'next/image'
import { AsideContainer } from './styles'
import { Avatar } from '../Avatar'
import { RouteIndicator } from '../RouteIndicator'
import { useRouter } from 'next/router'
export default function Aside() {
  const router = useRouter()

  async function handleNavigate(Route: string) {
    await router.push(`/${Route}`)
  }

  return (
    <AsideContainer>
      <section>
        <Image src={BookWiseLogo} alt="" width={130} quality={100} />
        <div>
          <section>
            <RouteIndicator display={router.pathname === '/Home'} />
            <button
              onClick={() => {
                handleNavigate('Home')
              }}
            >
              <ChartLineUp size={24} />
              <p>Início</p>
            </button>
          </section>
          <section>
            <RouteIndicator display={router.pathname === '/Home/Explorer'} />
            <button
              onClick={() => {
                handleNavigate('Home/Explorer')
              }}
            >
              <Binoculars size={24} />
              <p>Explorar</p>
            </button>
          </section>
          <section>
            <RouteIndicator display={router.pathname === '/Home/Profile'} />
            <button
              onClick={() => {
                handleNavigate('Home/Profile')
              }}
            >
              <User size={24} />
              <p>Perfil</p>
            </button>
          </section>
        </div>
      </section>
      <p>
        Fazer Login <SignIn color="#50B2C0" size={20} />
      </p>
      <span>
        <Avatar
          src="https://avatars.githubusercontent.com/u/96553464?v=4"
          alt="Imagem do usuário"
          width={32}
          height={32}
        />
        Daniel
        <SignOut size={20} color="#E25858" />
      </span>
    </AsideContainer>
  )
}
