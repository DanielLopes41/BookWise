![chrome-capture-2025-1-8](https://github.com/user-attachments/assets/f78873e0-6459-45dc-ba60-bea926a087b7)
# BookWise

## 📚 Sobre

**BookWise** é um projeto de avaliação de livros, onde usuários podem comentar e avaliar livros de diferentes categorias. A aplicação permite que você explore livros e veja avaliações feitas por outros leitores. Você pode buscar livros por categoria, avaliar e visualizar as notas dadas por outros usuários.

## 🚀 Funcionalidades

- **Cadastro e Autenticação**: Usuários podem se cadastrar e fazer login utilizando **NextAuth**.
- **Avaliações de Livros**: É possível avaliar livros e visualizar as avaliações feitas por outros usuários.
- **Categorias de Livros**: Navegue por livros de diferentes categorias e veja as recomendações.
- **Interface Simples e Funcional**: Desenvolvido com **Next.js** e **React**, com foco em usabilidade e performance.

## 🛠 Tecnologias Utilizadas

- **Next.js** para a estrutura da aplicação
- **NextAuth.js** para autenticação de usuários
- **PostgreSQL** como banco de dados, hospedado com **Prisma**
- **Axios** e **React Query** para gerenciamento de requisições API
- **Stitches** para estilização da interface

## 📦 Instalação

### Clonando o Repositório

Para rodar o projeto localmente, faça o clone do repositório:

```bash
git clone gh repo clone danielpvpao/BookWise

Instale as dependências:

npm install
Configure as variáveis de ambiente para o seu banco de dados e API:

Crie um arquivo .env na raiz do projeto e adicione suas configurações do PostgreSQL, NextAuth, e outras necessárias.
NEXTAUTH_URL=NEXTAUTH_URL=http://localhost:3000(Ou a porta que estiver usando)

GITHUB_SECRET=(Fornecido pelo Oauth do github)
GITHUB_ID=(Fornecido pelo Oauth do github)
NEXTAUTH_SECRET=(Chave Aleatória)

GOOGLE_SECRET=(Fornecido pelo OAuth da google)

GOOGLE_ID=(Fornecido pelo OAuth da google)

DATABASE_DIRECT_URL=(postgresql://Usuário:senha123@localhost:5432/bookwise) Exemplo

DATABASE_URL
Execute as migrações do Prisma:

npx prisma migrate dev
Inicie o servidor de desenvolvimento:

npm run dev


Este projeto prático foi desenvolvido durante o curso Ignite da Rocketseat. 
