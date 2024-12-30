import Image from 'next/image'
import {
  AuthButton,
  AuthButtonContainer,
  AuthContainer,
  AuthError,
  AuthPageContainer,
  MainContainer,
  TextContainer,
} from './styles'
import Logoimg from '../../../Logo/Image.jpg'
import GoogleImg from '../../../Logo/logos_google-icon.jpg'
import GithubImg from '../../../Logo/akar-icons_github-fill.jpg'
import GuestImg from '../../../Logo/RocketLaunch.jpg'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
export default function Home() {
  const Router = useRouter()
  const { data: session } = useSession()
  useEffect(() => {
    if (session) {
      Router.push('/Home')
    }
  }, [session, Router])
  async function HandleAuthClick() {
    await Cookies.set('GuestToken', 'Guest', { expires: 7, secure: true })
    await Router.push(`/Home`)
    signOut()
  }
  const hasAuthError = !!Router.query.error
  return (
    <AuthPageContainer>
      <MainContainer>
        <aside>
          <Image src={Logoimg} alt="Logo" quality={100} />
        </aside>
        <AuthContainer>
          <TextContainer>
            <h1>Boas Vindas!</h1>
            <p>Faça seu login ou acesse como visitante</p>
          </TextContainer>
          <AuthButtonContainer>
            <AuthButton
              onClick={() => signIn('google', { callbackUrl: '/Home' })}
            >
              <Image src={GoogleImg} alt="Google Logo" quality={100} /> Entrar
              com Google
            </AuthButton>
            <AuthButton
              onClick={() => signIn('github', { callbackUrl: '/Home' })}
            >
              <Image src={GithubImg} alt="Github Logo" quality={100} />
              Entrar com GitHub
            </AuthButton>
            <AuthButton
              onClick={() => {
                HandleAuthClick()
              }}
            >
              <Image src={GuestImg} alt="Rocket Image" quality={100} />
              Acessar como visitante
            </AuthButton>
            {hasAuthError ? (
              <AuthError>
                Ocorreu um erro na autenticação tente novamente
              </AuthError>
            ) : null}
          </AuthButtonContainer>
        </AuthContainer>
      </MainContainer>
    </AuthPageContainer>
  )
}
