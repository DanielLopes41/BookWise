import Aside from '@/Components/Aside'
import {
  Bar,
  Container,
  InfosContainer,
  MainContainer,
  ProfileContainer,
  ReadContainer,
  ReadsContainer,
} from './styles'
import { SearchBar } from '@/Components/SearchBar'
import { BookmarkSimple, BookOpen, Books, User, UserList } from 'phosphor-react'
import { ProfileRead } from './ProfileRead'
import { Avatar } from '@/Components/Avatar'

export default function Profile() {
  return (
    <Container>
      <Aside />
      <MainContainer>
        <p>
          <User size={32} /> Perfil
        </p>
        <SearchBar />
        <ReadsContainer>
          <ReadContainer>
            <p>Há 2 dias</p>
            <ProfileRead />
          </ReadContainer>
          <ReadContainer>
            <p>Há 2 dias</p>
            <ProfileRead />
          </ReadContainer>
          <ReadContainer>
            <p>Há 2 dias</p>
            <ProfileRead />
          </ReadContainer>
        </ReadsContainer>
      </MainContainer>
      <ProfileContainer>
        <InfosContainer>
          <div>
            <Avatar
              src="https://avatars.githubusercontent.com/u/96553464?v=4"
              alt="Imagem do usuário"
              width={72}
              height={72}
            />
            <span>
              <h1>Daniel Lopes</h1>
              <p>membro desde 2019</p>
            </span>
          </div>
          <span>
            <Bar></Bar>

            <div>
              <BookOpen size={32} />
              <section>
                <h1>233</h1>
                <p>Páginas lidas</p>
              </section>
            </div>
            <div>
              <Books size={32} />
              <section>
                <h1>10</h1>
                <p>livros avaliados</p>
              </section>
            </div>
            <div>
              <UserList size={32} />
              <section>
                <h1>8</h1>
                <p>Páginas lidas</p>
              </section>
            </div>
            <div>
              <BookmarkSimple size={32} />
              <section>
                <h1>233</h1>
                <p>Páginas lidas</p>
              </section>
            </div>
          </span>
        </InfosContainer>
      </ProfileContainer>
    </Container>
  )
}
