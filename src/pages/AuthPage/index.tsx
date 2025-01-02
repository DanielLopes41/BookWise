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
  const IfPostLimitCookieExists = !!Cookies.get('PostLimit')
  const Router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      Router.push('/Home')
    }
  }, [session, Router])

  async function HandleAuthClick() {
    await Cookies.set('GuestToken', 'Guest', { expires: 1 / 24, secure: true })
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
              onClick={async () => {
                try {
                  if (!IfPostLimitCookieExists) {
                    await signIn('google', { callbackUrl: '/Home' })
                    Cookies.set('PostLimit', '20', {
                      expires: 1 / 24,
                      secure: true,
                    })
                  }
                  await signIn('google', { callbackUrl: '/Home' })
                } catch (error) {
                  console.error('Erro durante o login com Google:', error)
                }
              }}
            >
              <Image src={GoogleImg} alt="Google Logo" quality={100} /> Entrar
              com Google
            </AuthButton>

            <AuthButton
              onClick={async () => {
                try {
                  if (!IfPostLimitCookieExists) {
                    await signIn('github', { callbackUrl: '/Home' })
                    Cookies.set('PostLimit', '20', {
                      expires: 1 / 24,
                      secure: true,
                    })
                  }
                  await signIn('github', { callbackUrl: '/Home' })
                } catch (error) {
                  console.error('Erro durante o login com GitHub:', error)
                }
              }}
            >
              <Image src={GithubImg} alt="Github Logo" quality={100} /> Entrar
              com GitHub
            </AuthButton>

            <AuthButton
              onClick={async () => {
                try {
                  await HandleAuthClick()
                  Cookies.set('PostLimit', '20', {
                    expires: 1 / 24,
                    secure: true,
                  })
                } catch (error) {
                  console.error('Erro durante o acesso como visitante:', error)
                }
              }}
            >
              {hasAuthError ? (
                <AuthError>
                  Ocorreu um erro na autenticação, tente novamente.
                </AuthError>
              ) : null}
              <Image src={GuestImg} alt="Rocket Image" quality={100} /> Acessar
              como visitante
            </AuthButton>
          </AuthButtonContainer>
        </AuthContainer>
      </MainContainer>
    </AuthPageContainer>
  )
}
