
# Projeto Pizzaria

Este projeto é uma aplicação desenvolvida para gerenciar categorias, produtos e pedidos em uma pizzaria. Utilizando tecnologias modernas como React, Next.js e SCSS, o sistema oferece uma interface amigável e intuitiva para os usuários. O backend foi desenvolvido com Node.js, Express, Prisma e PostgreSQL, garantindo segurança, escalabilidade e eficiência na manipulação de dados.

## Funcionalidades

- **Autenticação de Usuário**: Middleware para autenticação e validação de token, garantindo acesso seguro às rotas do dashboard.
- **Login e Cadastro**: Sistema de login integrado com API para autenticação via token JWT e tela de cadastro para novos usuários.
- **Gerenciamento de Categorias e Produtos**: Tela para cadastrar e visualizar categorias e produtos da pizzaria.
- **Pedidos**: Visualização de pedidos recentes com status, total e opção de atualizar a lista.
- **Logout**: Botão de logout que deleta o cookie de sessão e redireciona para a página inicial.

## Estrutura de Pastas

- **`/src`**: Contém todos os componentes React, estilo e lógica de negócio.
- **`/public`**: Imagens e arquivos estáticos utilizados na aplicação.
- **`/styles`**: Estilos utilizados na aplicação utilizando SCSS.
- **`/components`**: Componentes reutilizáveis como Header, Button, Orders, etc.

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - Next.js
  - SCSS
  - Lucide-react (para ícones)
- **Backend**:
  - Node.js
  - Express
  - Prisma (ORM)
  - PostgreSQL
- **Outros**:
  - Cookies-next (para gerenciamento de cookies)
  - React-dom (para manipulação de estados e form)

## Como Rodar o Projeto

1. **Pré-requisitos**:
   - Node.js instalado
   - Gerenciador de pacotes npm ou yarn

2. **Instalação**:
   1. Clone o repositório:
      ```bash
      git clone https://github.com/furlanilucas/pizza-app.git
      ```
   2. Acesse o diretório do projeto:
      ```bash
      cd pizza-app
      ```
   3. Instale as dependências do frontend:
      ```bash
      npm install
      ```
   4. Instale as dependências do backend:
      ```bash
      cd server
      npm install
      ```

3. **Configuração do banco de dados**:
   - Configure a conexão com o PostgreSQL no arquivo de configuração do Prisma (`prisma/.env`).

4. **Rodando o projeto**:
   - Execute o servidor backend:
     ```bash
     npm run dev --prefix server
     ```
   - Abra um segundo terminal e execute o frontend:
     ```bash
     npm run dev
     ```

5. **Acessar a aplicação**:
   - Acesse o dashboard pelo navegador:
     ```bash
     http://localhost:3000
     ```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues com sugestões e melhorias.

## Contato

Lucas Furlani - [LinkedIn](https://www.linkedin.com/in/lucas-furlani/) | [GitHub](https://github.com/furlanilucas)
