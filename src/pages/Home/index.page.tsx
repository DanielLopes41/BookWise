import {
  BookListContainer,
  CommentList,
  CommentListContainer,
  HomeContainer,
} from './styles'
import BookWiseLogo from '../../../Logo/Logo.png'
import Image from 'next/image'
import { Binoculars, CaretRight, ChartLineUp, SignIn } from 'phosphor-react'
import { Comment } from './Comment'
import { BookCard } from './BookCard'
export default function Home() {
  return (
    <HomeContainer>
      <aside>
        <section>
          <Image src={BookWiseLogo} alt="" width={150} quality={100} />
          <div>
            <p>
              <ChartLineUp size={24} />
              Início
            </p>
            <p>
              <Binoculars size={24} />
              Explorar
            </p>
          </div>
        </section>
        <p>
          Fazer Login <SignIn color="#50B2C0" size={20} />
        </p>
      </aside>

      <CommentListContainer>
        <h1>
          <ChartLineUp /> Início
        </h1>
        <CommentList>
          <p>Avaliações mais recentes</p>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </CommentList>
      </CommentListContainer>
      <BookListContainer>
        <span>
          <p>Livros populares</p>
          <p>
            Ver todos <CaretRight />
          </p>
        </span>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </BookListContainer>
    </HomeContainer>
  )
}
