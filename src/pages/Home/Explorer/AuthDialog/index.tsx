import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from './styles'
import GoogleImg from '../../../../../Logo/logos_google-icon.png'
import GithubImg from '../../../../../Logo/akar-icons_github-fill.png'
import Image from 'next/image'
import { X } from 'phosphor-react'
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
          <button>
            <Image
              src={GoogleImg}
              width={32}
              height={32}
              alt="Logo do Google"
            />
            <p>Entrar com Google</p>
          </button>
          <button>
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
