import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from './styles'
import GoogleImg from '../../../../../Logo/logos_google-icon.jpg'
import GithubImg from '../../../../../Logo/akar-icons_github-fill.jpg'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { signIn } from 'next-auth/react'
export default function AuthDialog() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <h1>Faça login para deixar sua avaliação</h1>
        <section>
          <button onClick={() => signIn('google')}>
            <Image
              src={GoogleImg}
              width={32}
              height={32}
              alt="Logo do Google"
            />
            <p>Entrar com Google</p>
          </button>

          <button onClick={() => signIn('github')}>
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
