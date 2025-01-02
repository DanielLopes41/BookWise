import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from './styles'
import GoogleImg from '../../../../../Logo/logos_google-icon.jpg'
import GithubImg from '../../../../../Logo/akar-icons_github-fill.jpg'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { signIn } from 'next-auth/react'
import Cookies from 'js-cookie'

export default function AuthDialog() {
  const IfPostLimitCookieExists = !!Cookies.get('PostLimit')

  const handleGoogleLogin = async () => {
    try {
      if (!IfPostLimitCookieExists) {
        await signIn('google', { callbackUrl: '/Home' })
        Cookies.set('PostLimit', '20', { expires: 1 / 24, secure: true })
      } else {
        await signIn('google', { callbackUrl: '/Home' })
      }
    } catch (error) {
      console.error('Erro durante o login com Google:', error)
    }
  }

  const handleGithubLogin = async () => {
    try {
      if (!IfPostLimitCookieExists) {
        await signIn('github', { callbackUrl: '/Home' })
        Cookies.set('PostLimit', '20', { expires: 1 / 24, secure: true })
      } else {
        await signIn('github', { callbackUrl: '/Home' })
      }
    } catch (error) {
      console.error('Erro durante o login com GitHub:', error)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <h1>Faça login para deixar sua avaliação</h1>
        <section>
          <button onClick={handleGoogleLogin}>
            <Image
              src={GoogleImg}
              width={32}
              height={32}
              alt="Logo do Google"
            />
            <p>Entrar com Google</p>
          </button>

          <button onClick={handleGithubLogin}>
            <Image
              src={GithubImg}
              width={32}
              height={32}
              alt="Logo do Github"
            />
            <p>Entrar com o Github</p>
          </button>
        </section>
      </Content>
    </Dialog.Portal>
  )
}
