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
import { useEffect, useState } from 'react'

export default function Profile() {
  const [searchBarChange, setSearchBarChange] = useState('')
  const [searchParam, setSearchParam] = useState('')

  const { data: OwnRatings } = useQuery({
    queryKey: ['OwnRatings'],
    queryFn: async () => {
      const response = await api.get(`/users/ratings/userRatings`)
      console.log(response.data)
      return response.data
    },
  })

  const { data: Users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await api.get(`/users`)
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

  const session = useSession()

  const handleSearchParam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarChange(e.target.value)
  }

  const clearSearchBarChange = () => {
    setSearchBarChange('')
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setSearchParam(searchBarChange)
      clearSearchBarChange()
    }
  }
  const filteredBooks = searchParam
    ? OwnRatings?.filter((book) =>
        book.title.toLowerCase().includes(searchParam.toLowerCase()),
      )
    : OwnRatings

  return (
    <Container>
      <Aside />
      <MainContainer>
        <p>
          <User size={32} /> Perfil
        </p>
        <SearchBar
          value={searchBarChange}
          onchange={handleSearchParam}
          onkeydown={handleKeyDown}
          placeholder="Buscar livro avaliado"
        />
        <ReadsContainer>
          {filteredBooks?.map((OwnRating, index) => {
            return (
              <ReadContainer key={index}>
                <p>
                  {formatDistanceToNow(new Date(OwnRating.created_at), {
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
              src={session.data?.user.avatar_url}
              alt="Imagem do usuário"
              width={72}
              height={72}
            />
            <span>
              <h1>{session.data?.user.name}</h1>
              <p>
                Membro desde{' '}
                {Users?.user.created_at
                  ? `${new Date(Users.user.created_at).getFullYear()}`
                  : 'Desconhecido'}
              </p>
            </span>
          </div>
          <span>
            <Bar />

            <div>
              <BookOpen size={32} />
              <section>
                <h1>{Users?.stats?.totalReadPages || 0}</h1>
                <p>Páginas lidas</p>
              </section>
            </div>
            <div>
              <Books size={32} />
              <section>
                <h1>{Users?.stats?.totalReadBooks || 0}</h1>
                <p>Livros avaliados</p>
              </section>
            </div>
            <div>
              <UserList size={32} />
              <section>
                <h1>{Users?.stats?.totalReadAuthors || 0}</h1>
                <p>Autores lidos</p>
              </section>
            </div>
            <div>
              <BookmarkSimple size={32} />
              <section>
                <h1>{Users?.stats?.mostFrequentCategory || 'Nenhuma'}</h1>
                <p>Categoria mais lida</p>
              </section>
            </div>
          </span>
        </InfosContainer>
      </ProfileContainer>
    </Container>
  )
}
