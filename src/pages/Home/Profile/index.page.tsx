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
import { useQuery } from '@tanstack/react-query'
import { api } from '@/pages/api/axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Cookies from 'js-cookie'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Profile() {
  const { data: OwnRatings } = useQuery({
    queryKey: ['OwnRatings'],
    queryFn: async () => {
      const response = await api.get(`/users/ratings/userRatings`)
      return response.data
    },
  })

  const { status } = useSession()
  const router = useRouter()
  useEffect(() => {
    const Token = Cookies.get('GuestToken') || false
    if (status === 'unauthenticated' && !Token) {
      router.push('/')
    }
  }, [status, router])
  return (
    <Container>
      <Aside />
      <MainContainer>
        <p>
          <User size={32} /> Perfil
        </p>
        <SearchBar />
        <ReadsContainer>
          {OwnRatings?.map((OwnRating, index) => {
            return (
              <ReadContainer key={index}>
                <p>
                  {formatDistanceToNow(OwnRating.created_at, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </p>
                <ProfileRead
                  Author={OwnRating.author}
                  Rate={OwnRating.rate}
                  Title={OwnRating.title}
                  content={OwnRating.description}
                  coverUrl={OwnRating.coverUrl}
                  key={OwnRating.id}
                />
              </ReadContainer>
            )
          })}
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
