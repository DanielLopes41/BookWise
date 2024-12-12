import Image from 'next/image'
import {
  AuthButton,
  AuthButtonContainer,
  AuthContainer,
  AuthPageContainer,
  MainContainer,
  TextContainer,
} from './styles'
import Logoimg from '../../../Logo/Image.png'
import GoogleImg from '../../../Logo/logos_google-icon.png'
import GithubImg from '../../../Logo/akar-icons_github-fill.png'
import GuestImg from '../../../Logo/RocketLaunch.png'
export default function Home() {
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
            <AuthButton>
              <Image src={GoogleImg} alt="Google Logo" quality={100} /> Entrar
              com Google
            </AuthButton>
            <AuthButton>
              <Image src={GithubImg} alt="Github Logo" quality={100} />
              Entrar com GitHub
            </AuthButton>
            <AuthButton>
              <Image src={GuestImg} alt="Rocket Image" quality={100} />
              Acessar como visitante
            </AuthButton>
          </AuthButtonContainer>
        </AuthContainer>
      </MainContainer>
    </AuthPageContainer>
  )
}
