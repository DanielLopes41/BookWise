import {
  BookListContainer,
  CommentList,
  CommentListContainer,
  HomeContainer,
  LastReadingContainer,
} from './styles'

import { CaretRight, ChartLineUp } from 'phosphor-react'
import { Comment } from './Comment'
import Aside from '@/Components/Aside'
import { LastReading } from '@/Components/LastReading'
import { HomeBookCard } from './HomeBookCard'

export default function Home() {
  return (
    <HomeContainer>
      <Aside />
      <CommentListContainer>
        <h1>
          <ChartLineUp /> Início
        </h1>
        <LastReadingContainer>
          <span>
            <p>Sua última leitura</p>
            <button>
              Ver Todas <CaretRight size={16} />
            </button>
          </span>
          <LastReading />
        </LastReadingContainer>
        <CommentList>
          <span>
            <p>Avaliações mais recentes</p>
          </span>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </CommentList>
      </CommentListContainer>
      <BookListContainer>
        <span>
          <p>Livros populares</p>
          <button>
            Ver todos <CaretRight size={16} />
          </button>
        </span>
        <HomeBookCard />
        <HomeBookCard />
        <HomeBookCard />
        <HomeBookCard />
      </BookListContainer>
    </HomeContainer>
  )
}
